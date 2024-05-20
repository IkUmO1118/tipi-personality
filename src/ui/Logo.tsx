import lightLogo from "/logo-light.svg";
import darkLogo from "/logo-dark.svg";
import { NavLink } from "react-router-dom";

type LogoProps = {
  mode: string;
};

function Logo({ mode }: LogoProps) {
  if (mode === "light")
    return (
      <NavLink className="flex items-center" to="/">
        <img src={lightLogo} alt="logo_light" />
      </NavLink>
    );

  if (mode === "dark")
    return <img src={darkLogo} alt="logo_dark" className="h-12" />;
}

export default Logo;
