"use client";

import React, { useState } from "react";
import { createContext } from "react";
import { PER_PAGE } from "../constant";

export const defaultVariables: TVariable = {
  name: "",
  limit: PER_PAGE,
  offset: 0,
};

const setFilter: React.Dispatch<React.SetStateAction<TVariable>> = () => {};
const setLoading: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export const FilterContex = createContext({
  filter: defaultVariables,
  loading: false,
  setFilter,
  setLoading,
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
  const [filter, setFilter] = useState<TVariable>(defaultVariables);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FilterContex.Provider
      value={{
        filter,
        setFilter,
        loading,
        setLoading,
      }}
    >
      {children}
    </FilterContex.Provider>
  );
};

export default FilterWrapper;
