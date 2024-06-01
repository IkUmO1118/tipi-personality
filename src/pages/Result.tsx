import ResultContainer from "@/features/result/ResultContainer";
import { useCheckCookieExpiration } from "@/hooks/useCheckCookieExpiration";
import { useGetLocalStorageKartes } from "@/hooks/useLocalStorage";

function Result() {
  useCheckCookieExpiration();
  const kartesData = useGetLocalStorageKartes();
  if (!kartesData)
    return (
      <div className="flex h-full items-center justify-center text-2xl">
        診断結果が見つかりません。もう一度性格診断テストを受けてください
      </div>
    );

  return <ResultContainer />;
}

export default Result;
