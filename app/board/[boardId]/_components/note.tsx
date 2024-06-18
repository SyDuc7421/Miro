"use client";

import { cn, getContrastingTextColor, RGBColorToHexColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { NoteLayer, TextLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

interface TextProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;

  const fontSizeBaseOnWidth = width * scaleFactor;
  const fontSizeBaseOnHeight = height * scaleFactor;

  return Math.min(fontSizeBaseOnHeight, fontSizeBaseOnWidth, maxFontSize);
};

export const Note = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: TextProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        background: fill ? RGBColorToHexColor(fill) : "#000",
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
      className="shadow-md drop-shadow-lg"
    >
      <ContentEditable
        html={value || "Text"}
        onChange={handleContentChange}
        style={{
          color: fill ? getContrastingTextColor(fill) : "#000",
          fontSize: calculateFontSize(width, height),
        }}
        className={cn(
          "flex h-full w-full items-center justify-center text-center outline-none",
          font.className,
        )}
      />
    </foreignObject>
  );
};
