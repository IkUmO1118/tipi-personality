import { useGetSession } from "@/hooks/useSessions";
import AboutBase from "@/ui/AboutBase";
import Report from "@/pages/Report";

function About() {
  const isResult = useGetSession("inTheReport") === "true";
  // sessionの'inTheReport' === 'true'の場合
  if (isResult) return <Report />;

  // sessionの'inTheReport' !== 'true'の場合
  return <AboutBase />;
}

export default About;
