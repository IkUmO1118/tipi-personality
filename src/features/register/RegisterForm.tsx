import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScoresContext } from "@/contexts/scores-context";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setEmail: setEmailApi } = useScoresContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.match(/^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i)) {
      alert("check input email address");
    } else {
      setEmailApi(email);
      setEmail("");
      inputRef.current?.blur();
      navigate("/diagnosis");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full grid-rows-[1fr_3.2rem_1fr] gap-4 px-24"
    >
      <div className="flex flex-col items-center gap-4 self-end">
        <h4 className="text-2xl font-medium text-neutral-800">
          Emailを登録する
        </h4>
        <p className="mb-6 text-sm text-neutral-500">
          診断テストを行うには、いかにEメールを入力してください。
        </p>
        <Input
          ref={inputRef}
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button>Sign In With Email</Button>
      <div></div>
    </form>
  );
}

export default RegisterForm;
