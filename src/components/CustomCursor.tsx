import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the device is a desktop with a fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    // Initially position offscreen so it doesn't flash at 0,0
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        currentX = mouseX;
        currentY = mouseY;
        hasMoved = true;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if the element or any of its parents has cursor: pointer style
      const computedStyle = window.getComputedStyle(target);
      const isPointer = computedStyle.cursor === "pointer";

      if (isPointer) {
        dot.classList.add("cursor-dot-large");
        isHovered = true;
      } else {
        dot.classList.remove("cursor-dot-large");
        isHovered = false;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    let animationFrameId: number;

    const updatePosition = () => {
      // Lerp position for organic, buttery smooth cursor movement
      const ease = isHovered ? 0.15 : 0.2;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 pointer-events-none z-[9999] bg-off-black-ink dark:bg-electric-lime rounded-full transition-[width,height,background-color] duration-300 w-[10px] h-[10px]"
      style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
    />
  );
}

