import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

const useMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef(false);

  useEffect(
    () => (): void => {
      isMounted.current = true;
    },
    []
  );

  return isMounted;
};

export default useMounted;
