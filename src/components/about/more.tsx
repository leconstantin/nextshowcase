"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConstructionHeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Building Your Vision, <br />
              Constructing the Future
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              With over 25 years of experience, we bring unparalleled expertise
              to every project, ensuring quality, safety, and innovation in
              every brick we lay.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Our Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg shadow-xl">
            <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]">
              <Image
                src="/stock.jpg"
                alt="Construction Site 1"
                layout="fill"
                objectFit="cover"
                className={`transition-opacity duration-1000 ${
                  activeImage === 0 ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
              <Image
                src="/stocka.jpg"
                alt="Construction Site 2"
                layout="fill"
                objectFit="cover"
                className={`transition-opacity duration-1000 ${
                  activeImage === 1 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-yellow-500 p-2 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </section>
  );
}
