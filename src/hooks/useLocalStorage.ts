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

export function useGetLocalStorageKartes(type: string = "value") {
  if (type === "value") {
    const { value } = JSON.parse(localStorage.getItem("kartes-data")!);
    return value;
  } else if (type === "timeStamp") {
    const { timeStamp } = JSON.parse(localStorage.getItem("kartes-data")!);
    return timeStamp;
  }
}
