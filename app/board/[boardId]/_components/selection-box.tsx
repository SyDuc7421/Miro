"use client";

import { memo } from "react";

import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@/liveblocks.config";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialboundss: XYWH) => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null,
    );

    const isShowingHandler = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path,
    );

    const bounds = useSelectionBounds();
    if (!bounds) {
      return null;
    }

    return (
      <>
        <rect
          className="pointer-events-none fill-transparent stroke-blue-500 stroke-1"
          style={{
            transform: `translate(${bounds.x}px, ${bounds.y}px)`,
          }}
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
        />
        {isShowingHandler && (
          <>
            {/* 1 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,
                                      ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Left, bounds);
              }}
            />
            {/* 2 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px,
                                      ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top, bounds);
              }}
            />
            {/* 3 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px,
                                      ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Right, bounds);
              }}
            />
            {/* 6 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px,
                                      ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Right, bounds);
              }}
            />
            {/* 9 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px,
                                      ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds);
              }}
            />
            {/* 8 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px,
                                      ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom, bounds);
              }}
            />
            {/* 7 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,
                                      ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds);
              }}
            />
            {/* 4 */}
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              x={0}
              y={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px,
                                      ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Left, bounds);
              }}
            />
          </>
        )}
      </>
    );
  },
);

SelectionBox.displayName = "SelectionBox";
