import { useGetSession } from "@/hooks/useSessions";
import Report from "@/pages/Report";
import PersonalityBase from "@/ui/PersonalityBase";

function Personality() {
  const isResult = useGetSession("inTheReport") === "true";
  // sessionの'inTheReport' === 'true'の場合
  if (isResult) return <Report />;

  // sessionの'inTheReport' !== 'true'の場合
  return <PersonalityBase />;
}

export default Personality;
