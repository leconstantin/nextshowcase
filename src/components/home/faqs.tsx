import { PlusIcon } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services does your web design agency offer?",
    answer:
      "Our agency offers a comprehensive range of web design services, including custom website design, responsive development, e-commerce solutions, UI/UX design, website maintenance, and SEO optimization. We tailor our services to meet the unique needs of each client.",
  },
  {
    id: 2,
    question: "How long does it typically take to complete a website project?",
    answer:
      "The timeline for a website project can vary depending on its complexity and scope. A simple website might take 4-6 weeks, while more complex projects could take 8-12 weeks or more. We work closely with our clients to establish realistic timelines and keep them updated throughout the process.",
  },
  {
    id: 3,
    question: "Do you offer ongoing support after the website is launched?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally after launch. This includes regular updates, security checks, content updates, and technical support. We can tailor a support plan to fit your specific needs and budget.",
  },
  {
    id: 4,
    question: "Can you help with website hosting and domain registration?",
    answer:
      "We can assist with both website hosting and domain registration. We work with reliable hosting providers to ensure your website has excellent uptime and performance. We can also help you secure a domain name that aligns with your brand and is SEO-friendly.",
  },
  {
    id: 5,
    question: "How do you ensure the websites you create are mobile-friendly?",
    answer:
      "Mobile-friendliness is a top priority in all our designs. We use responsive design techniques to ensure that websites look great and function well on all devices, from smartphones to desktop computers. We thoroughly test each site on various devices and screen sizes before launch.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-7xl mx-auto px-[24px] mt-[160px]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-[#090b17] font-sans text-4xl font-bold leading-[38px] mb-24 text-center">
          Frequently Asked Questions
        </h2>

        <dl className="mt-2 divide-y divide-slate-100 dark:divide-zinc-700">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group py-4 marker:content-[&#39;&#39;]"
            >
              <summary className="flex w-full cursor-pointer select-none justify-between items-center gap-x-3 lg:gap-x-3 md:gap-0 text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                <h4 className="dark:text-white">{faq.question}</h4>
                <PlusIcon className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 dark:stroke-slate-50  group-open:stroke-indigo-500" />
              </summary>
              <div>
                <p className="text-[#676e8b]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
