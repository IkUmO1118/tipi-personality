import { useEffect } from "react";
import {
  useGetLocalStorageKartes,
  useRemoveLocalStorage,
} from "@/hooks/useLocalStorage";
import { addWeeks } from "date-fns";

export function useCheckCookieExpiration() {
  useEffect(() => {
    const timeStamp = useGetLocalStorageKartes("timeStamp");
    if (timeStamp) {
      const currentTime = new Date().getTime();
      const expirationTime = addWeeks(new Date(timeStamp), 2).getTime();

      if (currentTime > expirationTime) {
        useRemoveLocalStorage("kartes-data");
        // 期限が切れた場合の追加の処理をここに記述するこもできます
      }
    }

    return () => {
      // Clean-up function
      console.log("Clean up: Removing cookie expiration check");
    };
  }, []);
}
