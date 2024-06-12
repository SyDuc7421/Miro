import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      List of users
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <Skeleton className="absolute right-2 top-2  h-12 w-[200px] rounded-md shadow-md" />
  );
};
