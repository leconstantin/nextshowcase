import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
const testimonials = [
  {
    id: 1,
    content:
      "This web design agency transformed our online presence. Their attention to detail and creative solutions exceeded our expectations.",
    author: "Emily Johnson",
    position: "CEO, TechStart Inc.",
  },
  {
    id: 2,
    content:
      "Working with this team was a breeze. They understood our vision and delivered a website that perfectly represents our brand.",
    author: "Michael Chen",
    position: "Marketing Director, GreenEco Solutions",
  },
  {
    id: 3,
    content:
      "The level of professionalism and expertise demonstrated by this agency is unparalleled. Our new website has significantly boosted our conversions.",
    author: "Sarah Thompson",
    position: "Founder, Artisan Crafts Co.",
  },
  {
    id: 4,
    content:
      "Working with this team was a breeze. They understood our vision and delivered a website that perfectly represents our brand.",
    author: "Michael Chenaaa",
    position: "Marketing Director, GreenEco Solutions",
  },
  {
    id: 5,
    content:
      "The level of professionalism and expertise demonstrated by this agency is unparalleled. Our new website has significantly boosted our conversions.",
    author: "Sarah Thompsonbbb",
    position: "Founder, Artisan Crafts Co.",
  },
];
export function Test() {
  return (
    <section className=" max-w-7xl mx-auto px-[24px] mt-[160px]">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-sm md:max-w-5xl mx-auto flex items-center justify-center"
      >
        {/* // max-w-6xl mx-auto px-[24px] mt-[160px] */}
        <CarouselContent className="py-10 px-2 flex gap-2 items-center">
          {testimonials.map((people, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white ring-1 ring-zinc-100 hover:ring-custom-purple ease-in-out duration-1000 rounded-lg shadow-lg p-6 size-80">
                <Quote className="text-primary w-8 h-8 mb-2 mx-auto" />
                <p className="text-lg text-center mb-6">{people.content}</p>
                <div className="text-center">
                  <p className="font-semibold">{people.author}</p>
                  <p className="text-sm text-gray-600">{people.position}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
