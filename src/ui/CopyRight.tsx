import { FaGithub } from "react-icons/fa6";

function CopyRight() {
  return (
    <div className="flex gap-7">
      <span className=" font-medium text-neutral-500">
        &copy; 2024 Ikumo Takahashi All rights reserved
      </span>
      <a
        className="flex"
        href="https://github.com/IkUmO1118"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="h-5 w-5 self-center text-neutral-500  transition-all duration-200 hover:scale-125" />
      </a>
    </div>
  );
}

export default CopyRight;
