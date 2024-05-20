import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header() {
  return (
    <div className="grid grid-cols-[1fr_10fr_1fr] border-b border-neutral-300 px-8">
      <Logo mode="light" />
      <HeaderMenu />
    </div>
  );
}

export default Header;
