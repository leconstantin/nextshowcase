import { Companies } from "@/components/home/companies";
import Cta from "@/components/home/cta";
import Ctaa from "@/components/home/ctaa";
import FAQSection from "@/components/home/faqs";
import Services from "@/components/home/service";
import { Test } from "@/components/home/test";
import TestimonialCarousel from "@/components/home/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="max-w-6xl mx-auto px-[24px] mb-[88px] pt-[142px] text-center">
        <h2 className="font-semibold text-5xl leading-tight max-w-[832px] mx-auto">
          Free Logo Maker
        </h2>
        <p className="text-[#676e8b] font-sans text-[20px] font-normal leading-[32px] mt-8 mx-auto max-w-[876px]">
          Looka Logo Maker combines your logo design preferences with Artificial
          Intelligence to help you create a custom logo you'll love. All it
          takes is a few clicks and five minutes.
        </p>
        <div className="mt-[40px] max-w-xl mx-auto flex items-center justify-center gap-3">
          <input
            type="text"
            className="h-auto w-2/3 focus:ring-2 ring-custom-purple ease-in  rounded px-3 py-4 bg-blue-100 outline-none"
          />
          <button className="bg-custom-purple hover:scale-105 hover:bg-[#1800f3] ease-in-out duration-300 text-white px-2 py-3 md:px-5 md:py-4 rounded-md">
            Let&apos;s make Website
          </button>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-[24px] mt-[160px]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9">
          <div className="flex-1">
            <Image
              src="/stocke.jpg"
              alt="plan image"
              height={700}
              width={700}
              className="h-auto rounded hover:scale-105 ease-in-out duration-500"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-[#090b17] font-sans text-[32px] font-bold leading-[38px] mb-4">
              <span className="text-custom-purple">01.</span>
              Our logo maker is easy
            </h2>
            <p className="text-[#676e8b] font-sans text-[16px] font-normal leading-[26px] mb-6">
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-[24px] mt-9 lg:mt-[160px]">
        <div className="flex  md:flex-row-reverse flex-col-reverse justify-center items-center gap-9">
          <div className="flex-1">
            <Image
              src="/stock.jpg"
              alt="plan image"
              height={700}
              width={700}
              className="h-auto rounded hover:scale-105 ease-in-out duration-500"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-[#090b17] font-sans text-[32px] font-bold leading-[38px] mb-4">
              <span className="text-custom-purple">02.</span>
              Our logo maker is easy
            </h2>
            <p className="text-[#676e8b] font-sans text-[16px] font-normal leading-[26px] mb-6">
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-[24px] mt-9 lg:mt-[160px]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9">
          <div className="flex-1">
            <Image
              src="/stocke.jpg"
              alt="plan image"
              height={700}
              width={700}
              className="h-auto rounded hover:scale-105 ease-in-out duration-500"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-[#090b17] font-sans text-[32px] font-bold leading-[38px] mb-4">
              <span className="text-custom-purple">03.</span>
              Our logo maker is easy
            </h2>
            <p className="text-[#676e8b] font-sans text-[16px] font-normal leading-[26px] mb-6">
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </div>
      </section>
      <Companies />
      <Ctaa />
      <Services />
      <FAQSection />

      {/* <TestimonialCarousel /> */}
      <Test />
      <Cta />
    </main>
  );
}
