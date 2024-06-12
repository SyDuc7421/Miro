import { Loader } from "lucide-react";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Loading = () => {
  return (
    <main className="flex h-full w-full items-center justify-center bg-neutral-100">
      <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};
