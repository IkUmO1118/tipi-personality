import PersonalityAgreeableness from "@/ui/PersonalityAgreeableness";
import PersonalityConscientiousness from "@/ui/PersonalityConscientiousness";
import PersonalityEmotionalStability from "@/ui/PersonalityEmotionalStability";
import PersonalityExtraversion from "@/ui/PersonalityExtraversion";
import PersonalityOpenness from "@/ui/PersonalityOpenness";
import { useParams } from "react-router-dom";

function PersonalityDetails() {
  const { personalityId } = useParams();
  // もし、すでに診断を受けており、kertes-Dataがstorageに存在した場合、彼らの情報を少し盛り込んだ内容を以下のcomponentに表示する
  // const data = useGetSession("kartes-data")!;
  // const kartesData = JSON.parse(data)?.value;

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
