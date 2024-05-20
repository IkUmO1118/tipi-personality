import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex flex-col items-center gap-6 py-32 text-neutral-800">
      <h1 className="text-5xl">
        &#34;深く理解されることの喜びを体験しよう&rdquo;
      </h1>
      <h3 className="flex flex-col items-center text-2xl">
        <span>たった10問で自分自身について</span>
        <span>信じられないほど正確な理解が手に入ります</span>
      </h3>

      <Button
        size="lg"
        className="mt-4"
        variant="default"
        onClick={() => navigate("/register")}
      >
        テストを受ける <span>&rarr;</span>
      </Button>
    </div>
  );
}

export default Home;
