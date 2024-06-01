import { Button } from "@/components/ui/button";
import { useGetLocalStorageKartes } from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isKartesData = useGetLocalStorageKartes() !== null;

  return (
    <div className="mx-auto flex flex-col items-center gap-6 py-32 text-neutral-800">
      <h1 className="text-5xl">
        &#34;深く理解されることの喜びを体験しよう&rdquo;
      </h1>
      <h3 className="flex flex-col items-center text-2xl">
        {!isKartesData ? (
          <>
            <span>たった10問で自分自身について</span>
            <span>信じられないほど正確な理解が手に入ります</span>
          </>
        ) : (
          <>
            <span>お帰りなさい 下のボタンをクリックして、結果を確認するか</span>
            <span>
              <button
                onClick={() => navigate("/register")}
                className="text-2xl underline decoration-neutral-400 underline-offset-4 transition-all duration-200 hover:decoration-neutral-800"
              >
                無料の性格検査
              </button>
              を再受験してください。
            </span>
          </>
        )}
      </h3>

      {!isKartesData ? (
        <Button
          size="lg"
          className="mt-4"
          variant="default"
          onClick={() => {
            navigate("/register");
          }}
        >
          テストを受ける
        </Button>
      ) : (
        <Button
          size="lg"
          className="mt-4"
          variant="default"
          onClick={() => {
            navigate("/result");
          }}
        >
          結果を見る
        </Button>
      )}
    </div>
  );
}

export default Home;
