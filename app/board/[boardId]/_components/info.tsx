"use client";

import { Actions } from "@/components/actions";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Separator = () => {
  return <div className="px-1.5 text-muted-foreground">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, { boardId: boardId as Id<"boards"> });
  const { onOpen } = useRenameModal();
  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={12} align="start">
        <Button variant="board" asChild>
          <Link href="/">
            <Image src="/logo.svg" alt="Board logo" width={40} height={40} />
            <span
              className={cn(
                "ml-2 text-xl font-semibold text-black",
                font.className,
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <Separator />
      <Hint label="Edit title" side="bottom" sideOffset={12} align="start">
        <Button variant="board" onClick={() => onOpen(data._id, data.title)}>
          {data.title}
        </Button>
      </Hint>
      <Separator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={12}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={12} align="start">
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <Skeleton className="absolute left-2 top-2 h-12 w-[300px] rounded-md shadow-md lg:w-[450px]" />
  );
};
