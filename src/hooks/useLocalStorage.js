import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const item = window.localStorage.getItem(key);
  let initVal = item ? JSON.parse(item) : initialValue;
  const [storedValue, setStoredValue] = useState(initVal);

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
