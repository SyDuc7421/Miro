"use client";

import { UserButton } from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <div className="flex items-center gap-x-4 bg-pink-100 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: Search */}</div>
      <div className="flex-1 lg:hidden" />
      <UserButton />
    </div>
  );
};

export default NavBar;
