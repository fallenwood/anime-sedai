import { useEffect } from "react";
import { useState } from "react";

export const usePersistState = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item !== null && item !== undefined && item !== "undefined" ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
};
