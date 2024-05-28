import { getKartes } from "@/services/apiKarte";
import { useQuery } from "@tanstack/react-query";

export function useKarte() {
  const {
    data: karte,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["kartes"],
    queryFn: getKartes,
  });

  return { karte, isLoading, error };
}
