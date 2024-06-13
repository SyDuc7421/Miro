"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "./avatar";

import { useOthers, useSelf } from "@/liveblocks.config";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOW_USERS = 2;
export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_USERS;
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      <div className="flex gap-x-2 ">
        {users.slice(0, MAX_SHOW_USERS).map((user) => {
          return (
            <UserAvatar
              key={user.id}
              name={user.info?.name}
              src={user.info?.picture}
              fallback={user.info?.name?.[0]}
              borderColor={connectionIdToColor(user.connectionId)}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            name={`${currentUser.info?.name} (You)`}
            src={currentUser.info?.picture}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_USERS} More`}
            fallback={`+${users.length - MAX_SHOW_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <Skeleton className="absolute right-2 top-2  h-12 w-[200px] rounded-md shadow-md" />
  );
};
