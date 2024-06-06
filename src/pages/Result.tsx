import ResultContainer from "@/features/result/ResultContainer";
import { useGetSession } from "@/hooks/useSessions";
import KartesNotFound from "@/ui/KartesNotFound";

function Result() {
  const isKartesData = useGetSession("kartes-data") !== null;
  if (!isKartesData) return <KartesNotFound />;

  return <ResultContainer />;
}

export default Result;
