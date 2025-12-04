"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function ServiceCard({
  title,
  description,
  features,
  image,
  link,
}: Service) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card className="max-w-lg mx-auto p-0 rounded-none relative rounded-tr-4xl rounded-bl-4xl border-0 shadow-none outline-0">
      <div
        className={cn(
          "flex flex-col justify-between w-full h-80 rounded-tr-4xl rounded-bl-4xl  bg-cover bg-center"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Button className="rounded-none rounded-br-lg w-full max-w-2xs bg-background shadow-none border-0 outline-0 hover:bg-background h-8 z-20 text-foreground font-bold text-base">
          {title}
        </Button>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-fit flex items-center justify-center ml-auto bg-background rounded-none rounded-tl-4xl size-16 border-0 outline-0 ring-0 shadow-none border-l-4 border-t-4 border-t-primary border-l-primary group hover:bg-background"
        >
          <Plus
            className={cn(
              "size-8 text-primary transition-all ease-in-out duration-400 group-hover:scale-120",
              isExpanded ? "rotate-45" : "rotate-0"
            )}
          />
        </Button>
      </div>

      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0 "
        )}
      >
        <CardContent className="space-y-6 ">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center ">
            <Button
              asChild
              className="w-full max-w-xs  bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Link href={link}>Explore Service</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
