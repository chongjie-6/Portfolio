"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/Carousel";

export function CarouselComponent({
  photos,
}: {
  photos: Array<{ src: string; description: string }>;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden aspect-video w-full">
                <Image
                  src={photo.src}
                  alt={photo.description}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none border border-stone-300 bg-[#f5f4f0] text-stone-900 hover:bg-stone-200 hover:border-stone-900 transition-all duration-150" />
        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none border border-stone-300 bg-[#f5f4f0] text-stone-900 hover:bg-stone-200 hover:border-stone-900 transition-all duration-150" />
      </Carousel>

      {/* Progress indicators */}
      <div className="flex items-center justify-between px-1 pt-3">
        <div className="flex gap-1.5 items-center">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={`h-px transition-all duration-300 ${
                i + 1 === current ? "w-6 bg-stone-900" : "w-2 bg-stone-300"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-stone-500">
          {current}/{count}
        </span>
      </div>
    </div>
  );
}