"use client";

import { memo } from "react";

import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@/liveblocks.config";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
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

    const bound = useSelectionBounds();
    if (!bound) {
      return null;
    }

    return (
      <>
        <rect
          className="pointer-events-none fill-transparent stroke-blue-500 stroke-1"
          style={{
            transform: `translate(${bound.x}px, ${bound.y}px)`,
          }}
          x={0}
          y={0}
          width={bound.width}
          height={bound.height}
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
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px,
                                      ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x + bound.width / 2 - HANDLE_WIDTH / 2}px,
                                      ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x + bound.width - HANDLE_WIDTH / 2}px,
                                      ${bound.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x + bound.width - HANDLE_WIDTH / 2}px,
                                      ${bound.y + bound.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x + bound.width - HANDLE_WIDTH / 2}px,
                                      ${bound.y + bound.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x + bound.width / 2 - HANDLE_WIDTH / 2}px,
                                      ${bound.y + bound.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px,
                                      ${bound.y + bound.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
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
                transform: `translate(${bound.x - HANDLE_WIDTH / 2}px,
                                      ${bound.y + bound.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                // TODO: resize handler
              }}
            />
          </>
        )}
      </>
    );
  },
);

SelectionBox.displayName = "SelectionBox";
