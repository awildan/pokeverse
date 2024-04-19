import React from "react";
import Search from "~/components/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import FilterPokemonTypes from "~/components/filter/pokemon-types";

const Filter = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-3/4 ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline search-accordion">
          <Search />
        </AccordionTrigger>
        <AccordionContent className="flex gap-2 flex-wrap justify-center border-none">
          <FilterPokemonTypes />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
