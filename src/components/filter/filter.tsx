import React from "react";
import Search from "~/components/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";

const Filter = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-3/4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <Search />
        </AccordionTrigger>
        <AccordionContent className="space-x-1">
          <Badge variant="default" className="capitalize cursor-pointer">
            fire
          </Badge>
          <Badge variant="default" className="capitalize cursor-pointer">
            water
          </Badge>
          <Badge variant="default" className="capitalize cursor-pointer">
            lightning
          </Badge>
          <Badge variant="default" className="capitalize cursor-pointer">
            poison
          </Badge>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
