import ReportContainer from "@/features/Report/ReportContainer";
import { useGetSession, useRemoveSession } from "@/hooks/useSessions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();
  useEffect(() => {
    const removeKeyFromSessionStorage = () => {
      if (useGetSession("inTheReport")) {
        useRemoveSession("inTheReport");
        navigate(0);
        console.log('Key "inTheReport" has been removed from sessionStorage.');
      }
    };

    window.onload = removeKeyFromSessionStorage;

    return () => {
      window.onload = null;
    };
  }, []);

  return <ReportContainer />;
}

export default Report;
