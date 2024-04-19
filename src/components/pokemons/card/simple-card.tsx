import React from "react";
import { IPokemon } from "~/interfaces/pokemon";
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

const SimpleCard = ({
  data,
  className,
}: {
  data: IPokemon;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        `hover:shadow-primary hover:shadow-md duration-200 cursor-pointer`,
        className
      )}
    >
      <CardHeader className="p-3">
        <CardTitle className="text-muted-foreground text-lg font-semibold">
          #{data.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={
            data.pokemon_v2_pokemonsprites[0].image_dream_world ||
            data.pokemon_v2_pokemonsprites[0].image_artwork
          }
          alt={data.name}
          width={150}
          height={150}
          className="w-full h-44"
          placeholder="blur"
          //   priority
          blurDataURL={
            data.pokemon_v2_pokemonsprites[0].image_dream_world ||
            data.pokemon_v2_pokemonsprites[0].image_artwork
          }
        />
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2">
        <h2 className="capitalize font-semibold text-lg text-foreground">
          {data.name}
        </h2>
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

export default SimpleCard;
