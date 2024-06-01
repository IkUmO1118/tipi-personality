import { useCheckCookieExpiration } from "@/hooks/useCheckCookieExpiration";
import { useParams } from "react-router-dom";

function PersonalityDetails() {
  useCheckCookieExpiration();

  const { personalityId } = useParams();
  return <div>{personalityId}</div>;
}

export default PersonalityDetails;
