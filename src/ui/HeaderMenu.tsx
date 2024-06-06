import { useGetSession } from "@/hooks/useSessions";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  const isResult = useGetSession("kartes-data") !== null;

  return (
    <div className="flex justify-center gap-5 text-neutral-800">
      {isResult && (
        <div className="relative flex">
          <NavLink to="result" className="peer self-center">
            <span>結果</span>
          </NavLink>
          <span className="absolute left-0 top-0 w-full peer-[&.active]:border-2 peer-[&.active]:border-black"></span>
        </div>
      )}
      <div className="relative flex">
        <NavLink to="register" className="peer self-center">
          <span>性格診断テスト</span>
        </NavLink>
        <span className="absolute left-0 top-0 w-full peer-[&.active]:border-2 peer-[&.active]:border-black"></span>
      </div>
      <div className="relative flex">
        <NavLink to="personality" className="peer self-center">
          <span>５因子特性について</span>
        </NavLink>
        <span className="absolute left-0 top-0 w-full peer-[&.active]:border-2 peer-[&.active]:border-black"></span>
      </div>
      <div className="relative flex">
        <NavLink to="contact" className="peer self-center">
          <span>お問い合わせ</span>
        </NavLink>
        <span className="absolute left-0 top-0 w-full peer-[&.active]:border-2 peer-[&.active]:border-black"></span>
      </div>
    </div>
  );
}

export default HeaderMenu;
