"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

interface CursorProps {
  connectionId: number;
}
export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  console.log(info, cursor);
  const name = info?.name || "Teammeate";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      className="relative drop-shadow-md"
      width={name.length * 10 + 24}
      height={50}
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 rounded-md px-1.5 py-0.5 text-xs text-white"
        style={{
          backgroundColor: connectionIdToColor(connectionId),
        }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
