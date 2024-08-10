import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  callback: () => void,
) => {
  const ref = useRef<T | null>(null);

  const clickHandle = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandle);
    return () => document.removeEventListener('click', clickHandle);
  }, [callback]);

  return { ref };
};
