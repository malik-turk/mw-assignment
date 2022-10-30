export function debounce<T extends unknown[]>(
  func: any,
  delay: number
): (...args: T) => void {
  let timer: any = null;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
}
