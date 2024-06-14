"use client";

import { useState } from "react";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

import { CanvasState, CanvasMode } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="relative h-full w-full touch-none ">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        redu={history.redo}
        undo={history.undo}
        canRedo={canRedo}
        canUndo={canUndo}
      />
    </main>
  );
};
