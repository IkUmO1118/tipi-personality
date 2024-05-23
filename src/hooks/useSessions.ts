type UseSetSessionProps = {
  key: string;
  value: string;
};

export function useSetSession({ key, value }: UseSetSessionProps): void {
  return sessionStorage.setItem(key, value);
}

type UseRemoveSessionProps = {
  key: string;
};

export function useRemoveSession({ key }: UseRemoveSessionProps): void {
  return sessionStorage.removeItem(key);
}

type UseGetSessionProps = {
  key: string;
};

export function useGetSession({ key }: UseGetSessionProps): string | null {
  return sessionStorage.getItem(key);
}
