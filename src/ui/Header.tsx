import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header() {
  return (
    <div className="sticky top-0 z-10 grid grid-cols-[1fr_10fr_1fr] bg-white px-8 shadow">
      <Logo mode="light" />
      <HeaderMenu />
    </div>
  );
}

export default Header;
