"use client";

import React from "react";
import { createContext } from "react";

const FilterContex = createContext(null);

const FilterWrapper = ({ children }: { children: React.ReactNode }) => {
  return <FilterContex.Provider value={null}>{children}</FilterContex.Provider>;
};

export default FilterWrapper;
