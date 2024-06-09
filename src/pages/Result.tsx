import ResultContainer from "@/features/result/ResultContainer";
import { useGetSession } from "@/hooks/useSessions";
import DataNotFound from "@/ui/DataNotFound";

function Result() {
  const isKartesData = useGetSession("kartes-data") !== null;
  if (!isKartesData)
    return (
      <DataNotFound text="診断結果が見つかりません。もう一度性格診断テストを受けてください" />
    );

  return <ResultContainer />;
}

export default Result;
