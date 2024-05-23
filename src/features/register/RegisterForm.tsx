import { Button } from "@/components/ui/button";
import { useSetSession } from "@/hooks/useSessions";

function RegisterForm() {
  function handleClick() {
    useSetSession({ key: "result-diagnosis", value: "true" });
  }
  return (
    <div>
      <Button onClick={handleClick}>set Session</Button>
    </div>
  );
}

export default RegisterForm;
