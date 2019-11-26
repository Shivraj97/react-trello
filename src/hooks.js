import { useEffect } from 'react';

export function useClickOutsideEffect(node, onClickOutside) {
  function handleClick(e) {
    if (node.current && !node.current.contains(e.target)) {
      onClickOutside();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
