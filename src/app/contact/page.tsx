import { ContactForm } from "@/components/about/contactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block md:w-1/2">
            <Image
              src="/stock.jpg"
              alt="Contact us"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
