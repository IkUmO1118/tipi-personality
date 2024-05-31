import { Button } from "@/components/ui/button";
import { useRemoveSession } from "@/hooks/useSessions";
import { useNavigate } from "react-router-dom";

function ReportNavigation({
  openId,
  setOpenId,
}: {
  openId: number;
  setOpenId: (id: number) => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-28 grid-cols-[1fr_6fr_1fr] items-center border-t border-neutral-300 px-7 py-7">
      <div className="flex items-center">
        <span className="text-cyan-600">&larr;</span>
        <Button
          variant="link"
          size="sm"
          className="justify-start text-cyan-700"
          onClick={() => {
            if (openId > 0) setOpenId(openId - 1);
          }}
          disabled={openId === 0}
        >
          戻る
        </Button>
      </div>
      <ul className="flex items-center justify-center gap-3 text-[8px]">
        <li>
          <button onClick={() => setOpenId(0)}>
            {openId === 0 ? (
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setOpenId(1)}>
            {openId === 1 ? (
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setOpenId(2)}>
            {openId === 2 ? (
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setOpenId(3)}>
            {openId === 3 ? (
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setOpenId(4)}>
            {openId === 4 ? (
              <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
            )}
          </button>
        </li>
      </ul>
      <Button
        size="lg"
        variant="destructive"
        onClick={() => {
          if (openId < 4) setOpenId(openId + 1);
          if (openId === 4) {
            navigate("/result");
            navigate(0);
            useRemoveSession("inTheReport");
          }
        }}
      >
        続ける
      </Button>
    </div>
  );
}

export default ReportNavigation;
