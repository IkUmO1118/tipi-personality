import { useState, useEffect, FormEvent } from "react";
import { useScoresContext } from "@/contexts/scores-context";

function useDiagnosisForm(questionNumber: number) {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const { addScore, deleteScore, scores } = useScoresContext();

  useEffect(() => {
    const currentScore = scores.find(
      (score) => score.questionNumber === questionNumber,
    );
    if (currentScore) {
      setSelectedValue(currentScore.score);
    } else {
      setSelectedValue(null);
    }

    return () => {
      setSelectedValue(null);
    };
  }, [questionNumber, scores]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const isInScore = scores.some(
      (score) => score.questionNumber === questionNumber,
    );

    if (isInScore && selectedValue !== null) {
      deleteScore(questionNumber);
    }

    if (selectedValue !== null) {
      addScore({ questionNumber: questionNumber, score: selectedValue });
    }
  }

  return { selectedValue, setSelectedValue, handleSubmit };
}

export default useDiagnosisForm;
