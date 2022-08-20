import { useState, useEffect } from 'react';

export default function useWindowSize(ref) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  function handleResize() {
    setWindowSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
