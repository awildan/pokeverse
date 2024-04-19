import { Radar } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";

const EmptyCard = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        `hover:shadow-primary hover:shadow-md duration-200 cursor-pointer`,
        className
      )}
    >
      <CardHeader>
        <Radar className="w-8 h-8" />
      </CardHeader>
      {children}
    </Card>
  );
};

export default EmptyCard;
