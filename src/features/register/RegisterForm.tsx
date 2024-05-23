import { Button } from "@/components/ui/button";

function RegisterForm() {
  function handleClick() {
    sessionStorage.setItem("result-diagnosis", "true");
  }
  return (
    <div>
      <Button onClick={handleClick}>set Session</Button>
    </div>
  );
}

export default RegisterForm;
