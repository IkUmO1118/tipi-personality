import { useGetSession } from "@/hooks/useSessions";
import AboutBase from "@/ui/AboutBase";
import AboutResult from "@/ui/AboutResult";

function About() {
  const isResult = useGetSession("inTheResult") === "true";
  // sessionの'inTheResult' === 'true'の場合
  if (isResult) return <AboutResult />;

  // sessionの'inTheResult' !== 'true'の場合
  return <AboutBase />;
}

export default About;
