"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { Peddana } from "next/font/google";
import { title } from "process";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate: create, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    create({
      orgId,
      title: "Untitle",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch((error) => toast.error("Faile to create new board"));
  };

  return (
    <Button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        "col-span-1 flex aspect-[100/127] h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 py-6 hover:bg-blue-800",
        (disabled || pending) && "cursor-not-allowed bg-blue-600 opacity-75",
      )}
    >
      <div />
      <Plus className="h-12 w-12 stroke-1 text-white" />
      <p className="text-xs font-light text-white">New board</p>
    </Button>
  );
};
