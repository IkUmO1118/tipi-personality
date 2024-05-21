import { Button } from "@/components/ui/button";
import Image from "/TIPI-404.svg";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="mx-auto grid grid-rows-[6fr_1fr_1fr] gap-3 py-5">
      <div className="mx-auto w-full max-w-[750px]">
        <img src={Image} alt="404 image" />
      </div>
      <h1 className="mx-auto font-mono text-4xl font-semibold text-neutral-800">
        Oops. This page does not exist.
      </h1>
      <div className="mx-auto flex items-center justify-center gap-6">
        <Button size="lg" onClick={() => navigate("/register")}>
          テストを受ける
        </Button>
        <Button size="lg" onClick={() => navigate("/about")}>
          性格タイプ
        </Button>
        <Button size="lg" onClick={() => navigate("/contact")}>
          お問い合わせ
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
