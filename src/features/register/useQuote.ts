import { getQuote } from "@/services/apiQuote";
import { useQuery } from "@tanstack/react-query";

export function useQuote() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["quote"],
    queryFn: getQuote,
  });

  return { data, isLoading };
}
