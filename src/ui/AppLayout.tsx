import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[5rem_auto_4.9rem]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
