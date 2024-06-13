import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      Info about board
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <Skeleton className="absolute left-2 top-2 h-12 w-[300px] rounded-md shadow-md lg:w-[450px]" />
  );
};
