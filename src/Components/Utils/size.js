import { useState, useEffect, useCallback } from 'react';
import { isUndefined } from 'lodash';

export const useDomSize = domRef => {
  const getSize = () => {
    const { current } = domRef;
    if (!isUndefined(current)) {
      return {
        width: current.offsetWidth,
        height: current.offsetHeight
      };
    }
    return { width: 0, height: 0 };
  };

  const [domSize, setDomSize] = useState(getSize);

  const onWindowSizeChange = () => {
    setDomSize(getSize);
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);
    return () => window.removeEventListener('resize', onWindowSizeChange);
  }, []);

  return domSize;
};

export const useWindowSize = () => {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  const onWindowSizeChange = () => {
    setWindowSize(getSize);
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);
    return () => window.removeEventListener('resize', onWindowSizeChange);
  }, []);
  return windowSize;
};
