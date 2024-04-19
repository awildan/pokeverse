"use client";

import { Search as SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "~/components/ui/input";
import React, { useContext } from "react";
import { FilterContex } from "~/lib/contex/filter-wrapper";

const Search = () => {
  const path = usePathname();
  const isNotHome = path.split("/")[1] !== "";

  const { filter, setFilter } = useContext(FilterContex);

  const handleChangeSearch = (val: string) => {
    console.log("val search", val);
  };

  return (
    !isNotHome && (
      <div className="relative flex w-3/4">
        <Input placeholder="Where's my pokémon?" className="peer block pl-10" />
        {/* <Input
          placeholder="Search pokémon"
          className="peer block sm:hidden pl-10"
        /> */}
        <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground peer-focus:text-foreground" />
      </div>
    )
  );
};

export default Search;
