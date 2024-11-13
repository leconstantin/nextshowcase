import { Code, Palette, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description:
        "Custom-built websites tailored to your specific needs and goals, ensuring a unique online presence.",
    },
    {
      icon: <Palette className=" h-10 w-10" />,
      title: "UI/UX Design",
      description:
        "Intuitive and visually appealing interfaces that enhance user experience and engagement.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Digital Marketing",
      description:
        "Comprehensive strategies to boost your online visibility and attract your target audience.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-[24px] mt-[160px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#090b17] font-sans text-4xl font-bold leading-[38px] mb-24 text-balance">
          Different <span className="text-custom-purple">Services</span> We
          offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-400 text-white  rounded-full p-6 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {index + 1}. {service.title}
              </h3>
              <p className="text-[#676e8b] font-sans text-[16px] font-normal leading-[26px] ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
