import { Skeleton } from "@/components/ui/skeleton";

function SkeltonQuote() {
  return (
    <>
      <Skeleton className="h-7 w-full bg-neutral-800" />
      <Skeleton className="h-5 w-1/5 bg-neutral-800" />
    </>
  );
}

export default SkeltonQuote;
