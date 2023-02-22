import { useCallback, useRef } from "react";

export function useEvent(fn) {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  return useCallback((...params) => fnRef.current(...params), []);
}
