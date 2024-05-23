import AboutBase from "@/ui/AboutBase";
import AboutResult from "@/ui/AboutResult";

function About() {
  const isResult: string | null = sessionStorage.getItem("result-diagnosis");

  // if sessionにresultがなかった場合
  if (!isResult) return <AboutBase />;

  // if sessionにresultがあった場合
  return <AboutResult />;
}

export default About;
