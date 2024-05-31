type UseSetLocalStorage = {
  key: string;
  value: string;
};
export function useSetLocalStorage({ key, value }: UseSetLocalStorage) {
  return localStorage.setItem(key, value);
}

export function useRemoveLocalStorage(key: string) {
  return localStorage.removeItem(key);
}

export function useGetLocalStorage(key: string) {
  return localStorage.getItem(key);
}
