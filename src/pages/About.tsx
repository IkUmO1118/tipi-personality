import { useGetSession } from "@/hooks/useSessions";
import { getUsers } from "@/services/apiUser";
import AboutBase from "@/ui/AboutBase";
import AboutResult from "@/ui/AboutResult";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    async function getUser() {
      const data = await getUsers();
      console.log(data);
    }
    getUser();
  }, []);
  const isResult =
    useGetSession({ key: "personalityDiagnosisResult" }) !== null;

  // if sessionにresultがなかった場合
  if (!isResult) return <AboutBase />;

  // if sessionにresultがあった場合
  return <AboutResult />;
}

export default About;
