import ResultContainer from "@/features/result/ResultContainer";
import { useGetLocalStorage } from "@/hooks/useLocalStorage";
import KartesNotFound from "@/ui/KartesNotFound";

function Result() {
  const isKartesData = useGetLocalStorage("kartes-data") !== null;
  if (!isKartesData) return <KartesNotFound />;

  return <ResultContainer />;
}

export default Result;
