import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ReactLenis} from 'lenis/react';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
);
