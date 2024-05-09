import Image from "/download.svg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="bg-gray-500 text-3xl text-red-500">Hello World!</div>
      <svg>
        <image className=" h-full w-full" href={Image} />
      </svg>
      <Button>On Click</Button>
    </>
  );
}

export default App;
