import ResultContainer from "@/features/result/ResultContainer";
import { useGetLocalStorage } from "@/hooks/useLocalStorage";
import KartesNotFound from "@/ui/KartesNotFound";

function Result() {
  const kartesData = useGetLocalStorage("kartes-data");
  if (!kartesData) return <KartesNotFound />;

  return <ResultContainer />;
}

export default Result;
