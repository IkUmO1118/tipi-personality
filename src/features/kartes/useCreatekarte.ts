import { useSetSession } from "@/hooks/useSessions";
import { createKarte as createKarteApi } from "@/services/apiKarte";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreateKarte() {
  const navigate = useNavigate();

  const { mutate: createKarte, isPending: isCreating } = useMutation({
    mutationFn: createKarteApi,
    onSuccess: (data) => {
      // personality scoreをsessionに登録
      useSetSession({
        key: "diagnosis-result",
        value: `${JSON.stringify(data)}`,
      });
      // diagnosis後にだけ表示される画面を表示するためのsession
      useSetSession({
        key: "inTheReport",
        value: "true",
      });
      navigate("/about");
    },
    onError: (err) => console.error(err.message),
  });

  return { createKarte, isCreating };
}
