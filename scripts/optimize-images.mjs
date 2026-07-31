import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/images");

const SKIP = new Set(["favicon.webp", "es.webp", "en.webp"]);

const MAX_WIDTH = {
    proyectos: 800,
    misc: 700,
    habilidades: 200,
};

const QUALITY = 78;

const bytes = (b) => (b / 1024).toFixed(1) + " KB";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function withRetry(fn, retries = 25, delay = 300) {
    let lastErr;
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            lastErr = err;
            await sleep(delay);
        }
    }
    throw lastErr;
}

async function optimizeFile(filePath, maxWidth) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const base = path.basename(filePath, ext);
    const outPath = path.join(dir, base + ".webp");

    const metadata = await sharp(filePath).metadata();
    const width = metadata.width ?? maxWidth;
    const targetWidth = Math.min(width, maxWidth);

    const before = (await stat(filePath)).size;

    if (ext === ".webp" && width <= maxWidth && before < 60 * 1024) {
        return null;
    }

    const inputBuffer = await withRetry(() => sharp(filePath).toBuffer());

    if (ext === ".webp") {
        const writeOutput = () =>
            sharp(inputBuffer)
                .rotate()
                .resize({ width: targetWidth, withoutEnlargement: true })
                .webp({ quality: QUALITY, effort: 6 })
                .toFile(outPath);

        await withRetry(writeOutput);
        return { name: path.basename(filePath), before, after: (await stat(outPath)).size };
    }

    const tmpPath = path.join(dir, base + ".webp.tmp");
    try {
        await unlink(tmpPath);
    } catch (e) {
        if (e.code !== "ENOENT") throw e;
    }

    const writeOutput = () =>
        sharp(inputBuffer)
            .rotate()
            .resize({ width: targetWidth, withoutEnlargement: true })
            .webp({ quality: QUALITY, effort: 6 })
            .toFile(tmpPath);

    await withRetry(writeOutput);

    const after = (await stat(tmpPath)).size;

    await withRetry(() => rename(tmpPath, outPath));
    await withRetry(() => unlink(filePath));

    return { name: path.basename(filePath), before, after, outPath };
}

async function main() {
    const entries = await readdir(ROOT, { withFileTypes: true });
    const jobs = [];

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const dirPath = path.join(ROOT, entry.name);
        const files = await readdir(dirPath);
        for (const file of files) {
            if (SKIP.has(file)) continue;
            const ext = path.extname(file).toLowerCase();
            if (![".webp", ".png", ".jpg", ".jpeg"].includes(ext)) continue;
            jobs.push(optimizeFile(path.join(dirPath, file), MAX_WIDTH[entry.name] ?? 800));
        }
    }

    const results = [];
    for (const job of jobs) {
        const result = await job;
        if (result) results.push(result);
    }
    results.sort((a, b) => b.before - a.before);

    let totalBefore = 0;
    let totalAfter = 0;

    for (const r of results) {
        totalBefore += r.before;
        totalAfter += r.after;
        console.log(
            `${bytes(r.before).padStart(9)} -> ${bytes(r.after).padStart(9)}  ${r.name}`,
        );
    }

    const pct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
    console.log("\nTotal: " + bytes(totalBefore) + " -> " + bytes(totalAfter) + ` (-${pct}%)`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
