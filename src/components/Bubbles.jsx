import { useEffect, useRef } from 'react';

function Bubbles() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      const size = Math.random() * 50 + 10;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.bottom = '-100px';
      bubble.style.setProperty(
        '--x-move',
        Math.random() * 200 - 100 + 'px'
      );
      bubble.style.animationDuration = Math.random() * 5 + 5 + 's';

      container.appendChild(bubble);
      bubble.addEventListener('animationend', () => bubble.remove());
    }

    // start generating bubbles
    function startGenerating() {
      if (intervalRef.current) return; // already running
      intervalRef.current = setInterval(createBubble, 500);
    }

    // stop generating bubbles
    function stopGenerating() {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // handle visibility change (tab active / inactive)
    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        startGenerating();
      } else {
        stopGenerating();
      }
    }

    // initial state
    if (document.visibilityState === 'visible') {
      startGenerating();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // cleanup
    return () => {
      stopGenerating();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="bubbles-container"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    ></div>
  );
}

export default Bubbles;
