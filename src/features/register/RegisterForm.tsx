import { Button } from "@/components/ui/button";
import { useSetSession } from "@/hooks/useSessions";

function RegisterForm() {
  function handleClick() {
    useSetSession({
      key: "personalityDiagnosisResult",
      value: `
      {
        score: [3.9, 5.51, 4.69, 4.61, 4.34],
        email: "ikumo@example.com"
      }
    `,
    });
  }
  return (
    <div>
      <Button onClick={handleClick}>set Session</Button>
    </div>
  );
}

export default RegisterForm;
