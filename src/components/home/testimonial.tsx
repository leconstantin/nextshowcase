"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

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
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 max-w-7xl mx-auto px-[24px] mt-[160px]">
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Quote className="text-primary w-12 h-12 mb-4 mx-auto" />
            <p className="text-lg text-center mb-6">
              {testimonials[currentIndex].content}
            </p>
            <div className="text-center">
              <p className="font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 -translate-x-full">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
