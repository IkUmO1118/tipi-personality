import { useParams } from "react-router-dom";

function PersonalityDetails() {
  const { personalityId } = useParams();
  return <div>{personalityId}</div>;
}

export default PersonalityDetails;
