"use client";

import { useAuth } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { formatDistanceToNow } from "date-fns";

import { Overlay } from "./overlay";
import { Footer } from "./footer";

import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";

import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  orgId: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  orgId,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const { mutate: favorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite,
  );
  const { mutate: unfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite,
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      unfavorite({
        id,
      }).catch(() => toast.error("Faile to unfavorite"));
    } else {
      favorite({
        id,
      }).catch(() => toast.error("Faile to favorite"));
    }
  };
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-fit"
            sizes=""
          />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="text-white opacity-75 transition-opacity hover:opacity-100" />
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return <Skeleton className="aspect-[100/127] overflow-hidden rounded-lg" />;
};
