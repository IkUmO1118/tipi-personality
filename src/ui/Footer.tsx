import CopyRight from "./CopyRight";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-1 border-t border-neutral-300 py-3">
      <CopyRight />
      <FooterNav />
    </div>
  );
}

export default Footer;
