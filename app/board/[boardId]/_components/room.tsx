"use client";

import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps {
  children: React.ReactNode;
  roomId: string;
  Loading: NonNullable<React.ReactNode> | null;
}

export const Room = ({ children, roomId, Loading }: RoomProps) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={Loading}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
