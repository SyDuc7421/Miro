"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const url = qs.stringifyUrl(
        {
          url: "/",
          query: {
            search: value,
          },
        },
        {
          skipEmptyString: true,
          skipNull: true,
        },
      );

      router.push(url);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, router]);

  return (
    <div className="relative w-full ">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
