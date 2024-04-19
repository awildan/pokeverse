"use client";

import { Search as SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "~/components/ui/input";
import React, { useContext, useState } from "react";
import { FilterContex } from "~/lib/contex/filter-wrapper";
import { PER_PAGE } from "~/lib/constant";

const Search = ({ isDisabled = false }: { isDisabled?: boolean }) => {
  const path = usePathname();
  const isNotHome = path.split("/")[1] !== "";
  const [inputVal, setInputVal] = useState<string>("");
  const { filter, setFilter, loading } = useContext(FilterContex);

  const handleSearch = () => {
    if (inputVal != filter.name) {
      setFilter((prev) => ({
        ...prev,
        offset: 0,
        limit: PER_PAGE,
        name: inputVal,
      }));
    }
  };

  const handleChangeKeyword = (keyword: string) => {
    const value = keyword.replace(/["><{};]/g, "");
    setInputVal(value);
  };

  const handleEnterSearch = (event: React.KeyboardEvent) => {
    if (event?.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    !isNotHome && (
      <div className="relative flex w-full">
        <Input
          placeholder="Where's my pokémon?"
          className="peer block pl-10"
          value={inputVal}
          onChange={(e) => handleChangeKeyword(e.target.value)}
          onKeyDown={handleEnterSearch}
          disabled={loading}
        />
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
