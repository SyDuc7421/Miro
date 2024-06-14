"use client";

import { Layer } from "@/types/canvas";

import { RoomProvider } from "@/liveblocks.config";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps {
  children: React.ReactNode;
  roomId: string;
  Loading: NonNullable<React.ReactNode> | null;
}

export const Room = ({ children, roomId, Loading }: RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
        selection: [],
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList<string>(),
      }}
    >
      <ClientSideSuspense fallback={Loading}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
