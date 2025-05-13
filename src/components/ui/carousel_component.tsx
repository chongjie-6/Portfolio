"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export function CarouselComponent({
  photos,
}: {
  photos: Array<{ src: string; description: string }>;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    setCount(api.scrollSnapList().length);
    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={photo.src + index}>
              <Image
                src={photo.src}
                alt={photo.description}
                width={500}
                height={500}
                quality={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full shadow hover:bg-black/90 hidden md:block" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full shadow hover:bg-black/90 hidden md:block" />
      </Carousel>
      {count > 0 && (
        <div className="bg-black/50 text-white px-2 py-1 rounded-md text-sm w-fit">
          {current} / {count}
        </div>
      )}
    </div>
  );
}

export default CarouselComponent;
