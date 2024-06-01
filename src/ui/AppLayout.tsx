import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useGetSession } from "@/hooks/useSessions";

function AppLayout() {
  const isResult = useGetSession("inTheReport") === "true";
  const styleGrid = !isResult
    ? "grid-rows-[5rem_1fr_4.9rem]"
    : "grid-rows-[5rem_1fr]";

  return (
    <div className={`grid h-screen ${styleGrid}`}>
      {<Header />}
      <main>
        <Outlet />
      </main>
      {!isResult && <Footer />}
    </div>
  );
}

export default AppLayout;
