import { useScoresContext } from "@/contexts/scores-context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiagnosisRight from "./DiagnosisRight";
import DiagnosisLeft from "./DiagnosisLeft";

function DiagnosisContainer() {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const { email } = useScoresContext();

  useEffect(() => {
    if (email === "") navigate("/register");
  }, [email, navigate]);
  return (
    <>
      <DiagnosisLeft index={index} />
      <DiagnosisRight
        onNext={() => {
          index < 9 && setIndex((i) => i + 1);
        }}
        onPrev={() => {
          index > 0 && setIndex((i) => i - 1);
        }}
        questionNumber={index}
      />
    </>
  );
}

export default DiagnosisContainer;
