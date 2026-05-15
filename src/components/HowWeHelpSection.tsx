import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";

const HELP_ITEMS = [
  "We pride ourselves in getting to know your company and who is behind it. Your brand and people are unique, and we tell your story to candidates in the U.S. market.",
  "We counsel and support companies during startup, expansion and FDI projects to achieve their unique plans for the U.S. market.",
  "We actively pursue high caliber talent on your behalf and ensure that our candidates will fit your unique company culture.",
  "We share the same cultural upbringing and, in some cases, literally speak your language.",
  "We act as a de facto talent acquisition department by supporting your existing HR department.",
] as const;

export function HowWeHelpSection() {
  return (
    <section className="flex w-full flex-col p-0 lg:min-h-[910px] lg:flex-row">
      {/* Left column — full-cover background photo */}
      <div
        className="h-[280px] w-full bg-cover bg-no-repeat sm:h-[360px] lg:h-auto lg:min-h-full lg:w-1/2"
        style={{
          backgroundImage: "url(/images/howwehelp-left.jpg)",
          backgroundPosition: "100% 50%",
        }}
        aria-hidden="true"
      />

      {/* Right column — white content stack, vertically centered */}
      <div className="flex w-full flex-col justify-center bg-white px-[24px] py-[40px] lg:w-1/2 lg:px-[90px] lg:py-[80px]">
        <Image
          src="/images/logo-tagline.png"
          alt="The Oertzen Group"
          width={280}
          height={39}
          className="mb-[24px] h-auto w-[280px]"
        />

        <h3 className="m-0 text-left font-sans text-[50px] font-bold leading-[55px] tracking-[-1px] text-[#00496a]">
          How we can help
        </h3>

        <hr className="my-[24px] w-full max-w-[468px] border-0 border-t-[1.77px] border-solid border-[#90cc57]" />

        <ul className="m-0 list-none p-0">
          {HELP_ITEMS.map((item, index) => {
            const isLast = index === HELP_ITEMS.length - 1;
            return (
              <li
                key={item}
                className={`flex flex-row items-start ${
                  isLast ? "pb-0" : "pb-[15px]"
                }`}
              >
                <CheckCircleIcon className="mr-[12px] h-[24px] w-[24px] shrink-0 text-[#90cc57]" />
                <span className="font-serif text-[18px] font-light leading-[25.2px] text-[#0d0d0d]">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>

        <a
          href="/connect/"
          className="mt-[30px] inline-block self-start rounded-[20px] bg-[#00496a] px-[30px] py-[15px] font-sans text-[13px] font-bold uppercase leading-none tracking-[1px] text-white transition-transform duration-300 hover:scale-110"
        >
          contact us Today
        </a>
      </div>
    </section>
  );
}
