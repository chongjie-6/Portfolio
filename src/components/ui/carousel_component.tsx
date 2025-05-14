"use client";
import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselComponent({
  photos,
}: {
  photos: Array<{ src: string; description: string }>;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full h-full lg:min-w-xl lg:max-w-xl md:min-w-sm md:max-w-sm">
      <Carousel
        setApi={setApi}
        className="w-full lg:min-w-xl lg:max-w-xl md:min-w-sm md:max-w-sm"
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={photo.src}
                    alt={photo.description}
                    width={500}
                    height={500}
                    quality={100}
                    className="w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full shadow hover:bg-violet-500 hidden md:block " />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full shadow hover:bg-violet-500 hidden md:block" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </div>
  );
}
