import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
export default function Cta() {
  return (
    <section className="max-w-7xl mx-auto bg-[#5340ff] px-[24px] mt-[160px]">
      <div className="flex flex-col md:flex-row py-[96px] px-3">
        <div className=" flex-1 mx-auto text-white w-full">
          <h2 className="font-sans text-4xl font-bold leading-[38px] pb-6">
            Get started today!
          </h2>
          <p className="max-w-sm">
            Use Looka's AI-powered platform to create a logo, design a website,
            and build a brand you love.
          </p>
        </div>
        <div className="mt-[40px] flex flex-1 w-full  flex-col md:flex-row items-center justify-center gap-3 ">
          <input
            type="text"
            className="h-auto w-2/3 focus:ring-2 ring-custom-purple ease-in  rounded px-3 py-4 bg-white outline-none"
            placeholder="Enter your email to subscribe"
          />
          <button className="bg-gray-950 hover:scale-105 hover:bg-[#0b072d] ease-in-out duration-300 text-white px-5 py-4 rounded-md">
            Let&apos;s make Website
          </button>
        </div>
      </div>
    </section>
  );
}
