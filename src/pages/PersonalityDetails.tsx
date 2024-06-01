import { useGetLocalStorage } from "@/hooks/useLocalStorage";
import { useParams } from "react-router-dom";

function PersonalityDetails() {
  const { personalityId } = useParams();
  const kartesData = useGetLocalStorage("kartes-data");
  console.log(kartesData);
  return <div>{personalityId}</div>;
}

export default PersonalityDetails;
