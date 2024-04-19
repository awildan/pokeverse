"use client";

import React, { useState } from "react";
import { createContext } from "react";

const variables: TVariable = {
  name: "%%",
  limit: 40,
  offset: 0,
};

const setFilter: React.Dispatch<React.SetStateAction<TVariable>> = () => {};

export const FilterContex = createContext({
  filter: variables,
  setFilter: setFilter,
});

type TVariable = {
  limit: number;
  offset: number;
  name: string;
  idType?: {
    _eq: number;
  };
};

const FilterWrapper = ({ children }: { children: React.ReactNode }) => {
  const variables: TVariable = {
    name: "%%",
    limit: 40,
    offset: 0,
  };

  const [filter, setFilter] = useState<TVariable>(variables);
  return (
    <FilterContex.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterContex.Provider>
  );
};

export default FilterWrapper;
