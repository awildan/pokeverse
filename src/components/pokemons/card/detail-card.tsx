import React from "react";
import { IPokemonDetail } from "~/interfaces/pokemon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const DetailCard = ({
  data,
  className,
}: {
  data: IPokemonDetail;
  className?: string;
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="p-3">
        <CardTitle className="text-muted-foreground text-lg font-semibold">
          #{data.id}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-10 flex-wrap items-start">
        <Image
          src={
            data.pokemon_v2_pokemonsprites[0].image_dream_world ||
            data.pokemon_v2_pokemonsprites[0].image_artwork
          }
          alt={data.name}
          width={150}
          height={150}
          className="w-full sm:w-56 h-56"
          placeholder="blur"
          blurDataURL={
            data.pokemon_v2_pokemonsprites[0].image_dream_world ||
            data.pokemon_v2_pokemonsprites[0].image_artwork
          }
        />
        <div className="flex flex-col gap-2 flex-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Abilities</AccordionTrigger>
              <AccordionContent className="space-x-1">
                {data.pokemon_v2_pokemonabilities.map((ability) => (
                  <Badge
                    key={ability.id}
                    variant="default"
                    className="capitalize"
                  >
                    {ability.pokemon_v2_ability.name}
                  </Badge>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Habitat</AccordionTrigger>
              <AccordionContent>
                <Badge variant="default" className="capitalize">
                  {data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonhabitat
                    ?.name || "unknown"}
                </Badge>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Height</AccordionTrigger>
              <AccordionContent className="font-bold">
                {data.height / 10} Meters
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Weight</AccordionTrigger>
              <AccordionContent className="font-bold">
                {data.weight / 10} Kilogram
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start">
        <div className="flex gap-1 items-center">
          <h2 className="capitalize font-bold text-xl md:text-3xl">
            {data.name}
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg font-medium">
            ({data.base_experience} Exp)
          </p>
        </div>

        <div className="flex gap-1 flex-wrap">
          {data.pokemon_v2_pokemontypes.map((type) => (
            <Badge key={type.id} variant="default" className="capitalize">
              {type.pokemon_v2_type.name}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DetailCard;
