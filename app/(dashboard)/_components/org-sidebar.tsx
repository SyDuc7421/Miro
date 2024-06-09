"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";

import { OrganizationSwitcher } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSideBar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="mt-5 hidden w-[206px] flex-col space-y-6 pl-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="./logo.svg" alt="Logo" height={60} width={60} />
          <span className={cn("text-2xl font-semibold", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              backgroundColor: "white",
              justifyContent: "space-between",
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          asChild
          variant={favorites ? "ghost" : "secondary"}
          className="w-full justify-start px-2 font-normal"
          size="lg"
        >
          <Link href="/">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Team boards
          </Link>
        </Button>
      </div>
      <div className="w-full space-y-1">
        <Button
          asChild
          variant={favorites ? "secondary" : "ghost"}
          className="w-full justify-start px-2 font-normal"
          size="lg"
        >
          <Link
            href={{
              pathname: "/",
              query: {
                favorites: true,
              },
            }}
          >
            <Star className="mr-2 h-4 w-4" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSideBar;
