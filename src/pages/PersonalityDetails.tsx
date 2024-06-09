import PersonalityExtraversion from "@/features/personality/PersonalityExtraversion";
import PersonalityAgreeableness from "@/features/personality/PersonalityAgreeableness";
import PersonalityConscientiousness from "@/features/personality/PersonalityConscientiousness";
import PersonalityOpenness from "@/features/personality/PersonalityOpenness";
import PersonalityEmotionalStability from "@/features/personality/PersonalityEmotionalStability";
import { useParams } from "react-router-dom";

function PersonalityDetails() {
  const { personalityId } = useParams();
  // もし、すでに診断を受けており、kertes-Dataがstorageに存在した場合、彼らの情報を少し盛り込んだ内容を以下のcomponentに表示する

  return (
    <div className="px-4">
      {personalityId === "extraversion" && <PersonalityExtraversion />}
      {personalityId === "agreeableness" && <PersonalityAgreeableness />}
      {personalityId === "conscientiousness" && (
        <PersonalityConscientiousness />
      )}
      {personalityId === "openness" && <PersonalityOpenness />}
      {personalityId === "emotionalStability" && (
        <PersonalityEmotionalStability />
      )}
    </div>
  );
}

export default PersonalityDetails;
