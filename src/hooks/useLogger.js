export function useLogger() {
  const log = (message) => {
    console.log(message);
  };

  const error = (message) => {
    console.error(message);
  };

  const warn = (message) => {
    console.warn(message);
  };
  return { log, warn, error };
}
