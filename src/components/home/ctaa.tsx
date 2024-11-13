import Image from "next/image";

export default function Ctaa() {
  return (
    <main className="max-w-7xl mx-auto px-[24px] mt-[160px]">
      <div>
        <h2 className="text-[#090b17] font-sans text-[32px] font-bold leading-[38px] text-center">
          We&apos;re here to help build your brand Looka&apos;s fun and friendly
        </h2>
        <p className="text-[#676e8b] font-sans text-[16px] font-normal leading-[26px] mb-[56px] mt-[32px] text-center max-w-3xl mx-auto">
          in-house customer success team is available{" "}
          <span className="text-custom-purple">via live chat and email</span> to
          answer all your questions. Get help accessing files, tweaking your
          logo designs, and more!{" "}
        </p>
        <div className="max-w-3xl mx-auto">
          <Image
            src="/team.jpg"
            alt="team image"
            height={700}
            width={1884}
            className="h-auto rounded hover:scale-105 ease-in-out duration-500"
          />
        </div>

        <div className="my-10 mx-auto max-w-2xl text-center">
          <button className="ring-1 ring-custom-purple text-custom-purple px-5 py-3 rounded hover:bg-custom-purple hover:scale-105 hover:text-white ease-in-out duration-500">
            Contact us
          </button>
        </div>
      </div>
    </main>
  );
}
