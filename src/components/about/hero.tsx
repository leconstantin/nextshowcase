import Image from "next/image";
import Link from "next/link";

export default function HeroAbout() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Our Dynamic Platform
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Experience the power of innovation with our cutting-edge solutions
              that elevate your digital presence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/stock.jpg"
              alt="Hero Image"
              width={550}
              height={550}
              className="rounded-lg object-cover"
              priority
            />
            <Image
              src="/stocka.jpg"
              alt="Floating Image 1"
              width={100}
              height={100}
              className="absolute left-[-20px] top-[20%] rounded-full animate-float"
            />
            <Image
              src="/stocke.jpg"
              alt="Floating Image 2"
              width={80}
              height={80}
              className="absolute bottom-[10%] right-[-10px] rounded-full animate-float animation-delay-2000"
            />
            <Image
              src="/stock.jpg"
              alt="Floating Image 3"
              width={60}
              height={60}
              className="absolute right-[20%] top-[-30px] rounded-full animate-float animation-delay-4000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
