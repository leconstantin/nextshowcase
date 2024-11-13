"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const companies = [
  {
    name: "amazon",
    path: "/companies/amazon.svg",
    id: 1,
  },
  {
    name: "atlassian",
    path: "/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "/companies/meta.svg",
    id: 5,
  },
  {
    name: "microsoft",
    path: "/companies/microsoft.webp",
    id: 6,
  },
  {
    name: "netflix",
    path: "/companies/netflix.png",
    id: 7,
  },
  {
    name: "uber",
    path: "/companies/uber.svg",
    id: 8,
  },
];

export function Companies() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="max-w-7xl mx-auto px-[24px] mt-[160px]">
      <h2 className="text-[#090b17] font-sans text-[32px] font-bold leading-[38px] mb-4 text-center">
        We use technology which is used by many other companies
      </h2>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-10 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <Image
                  src={path}
                  className="h-9 sm:h-14 object-contain"
                  alt=""
                  height={500}
                  width={500}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
