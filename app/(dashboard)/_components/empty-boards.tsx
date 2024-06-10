"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoards = () => {
  const { mutate: create, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();
  const router = useRouter();

  const onClick = () => {
    if (!organization) {
      return;
    }

    create({
      orgId: organization.id,
      title: "Untitle",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`board/${id}`);
      })
      .catch((error) => {
        toast.error("Faile to create new Board");
      });
  };
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" width={110} height={110} />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by createing a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create a board
        </Button>
      </div>
    </div>
  );
};
