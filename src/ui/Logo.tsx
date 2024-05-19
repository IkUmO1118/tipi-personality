import lightLogo from "/logo-light.svg";
import darkLogo from "/logo-dark.svg";

type LogoProps = {
  mode: string;
};

function Logo({ mode }: LogoProps) {
  if (mode === "light")
    return (
      <div className="h-12 self-center">
        <img src={lightLogo} alt="logo_light" />
      </div>
    );

  if (mode === "dark")
    return (
      <div className="h-12">
        <img src={darkLogo} alt="logo_dark" />
      </div>
    );
}

export default Logo;
