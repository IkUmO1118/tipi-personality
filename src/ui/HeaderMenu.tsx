import { useGetSession } from "@/hooks/useSessions";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  const isResult = useGetSession("inTheReport") === "true";

  return (
    <div className="flex items-center justify-center gap-5 text-neutral-800">
      {isResult && <NavLink to="result">結果</NavLink>}
      <NavLink to="register">性格診断テスト</NavLink>
      <NavLink to="about">５因子特性について</NavLink>
      <NavLink to="contact">お問い合わせ</NavLink>
    </div>
  );
}

export default HeaderMenu;
