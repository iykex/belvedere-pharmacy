"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle, Plus } from "lucide-react";
import Image from "next/image";
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
    <Card className="max-w-lg mx-auto p-0 bg-background rounded-none relative rounded-tr-4xl rounded-bl-4xl border-0 shadow-none outline-0 overflow-hidden gap-0">
      {/* Background Image with CDN optimization */}
      <div className="relative w-full h-80  rounded-tr-4xl rounded-bl-4xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover object-center"
          quality={80}
          loading="lazy"
          placeholder="blur"
        />

        {/* Title button */}
        <Button className="absolute top-0 left-0 rounded-none rounded-br-lg w-full max-w-2xs bg-background backdrop-blur-sm shadow-none border-0 h-10 z-20 text-foreground font-bold text-base hover:bg-background">
          {title}
        </Button>

        {/* Expand button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-0 right-0 w-fit flex items-center justify-center bg-background backdrop-blur-sm rounded-none rounded-tl-4xl size-16 border-0 ring-0 shadow-none border-l-4 border-t-4 border-t-primary border-l-primary group hover:bg-background"
        >
          <Plus
            className={cn(
              "size-8 text-primary transition-all ease-in-out duration-400 group-hover:scale-120",
              isExpanded ? "rotate-45 text-red-600" : "rotate-0"
            )}
          />
        </Button>
      </div>

      {/* Expandable content */}
      <CardContent
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden bg-background max-h-0 opacity-0 space-y-6",
          isExpanded && "max-h-96 opacity-100 pt-6"
        )}
      >
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

        <div className="w-full flex justify-center">
          <Button
            asChild
            className="w-full max-w-xs bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <Link href={link}>Explore Service</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
