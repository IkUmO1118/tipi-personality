import { useSetSession } from "@/hooks/useSessions";
import { createKarte as createKarteApi } from "@/services/apiKarte";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateKarte() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createKarte, isPending: isCreating } = useMutation({
    mutationFn: createKarteApi,
    onSuccess: (data) => {
      useSetSession({
        key: "personalityDiagnosisResult",
        value: `${JSON.stringify(data)}`,
      });
      // react queryのcacheにdataを入れる方法を考える
      navigate("/about");
      console.log(data);
    },
    onError: (err) => console.error(err.message),
  });

  return { createKarte, isCreating };
}
