"use client";

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);
  console.log(info);
  return (
    <main className="relative h-full w-full touch-none ">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};
