import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Executive Search",
    description:
      "We partner with medtech, robotics, food manufacturing, industrial technology, and other private equity-backed companies to identify and secure the leadership and specialist talent needed to scale successfully in the North American market.",
    image: "/images/services/executivesearch.png",
    href: "/expertise/",
  },
  {
    title: "Talent Assessment",
    description:
      "We help companies assess leadership and talent capabilities to identify potential, strengthen teams, and make better business decisions.",
    image: "/images/services/talentassessment.png",
    href: "/expertise/",
  },
  {
    title: "Leadership Development",
    description:
      "We help companies develop leadership and team capabilities to unlock potential and drive stronger business results.",
    image: "/images/services/leadershipadvisory.png",
    href: "/expertise/",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#f1f3f1] px-[24px] pb-[80px] pt-[40px] lg:px-[100px] lg:pb-[120px] lg:pt-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className="text-center font-[family-name:var(--font-montserrat)] text-[40px] font-bold text-[#124336] xl:text-[48px]"
          style={{ letterSpacing: "-2px" }}
        >
          Services
        </h2>

        <div className="mt-[56px] grid grid-cols-1 gap-[48px] md:grid-cols-3 md:gap-[40px]">
          {SERVICES.map((service) => (
            <article key={service.title} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3
                className="mt-[24px] text-center font-[family-name:var(--font-montserrat)] text-[22px] font-bold uppercase text-[#124336]"
                style={{ letterSpacing: "0.5px" }}
              >
                {service.title}
              </h3>

              <p className="mt-[14px] text-center font-[family-name:var(--font-plus-jakarta-sans)] text-[16px] leading-[26px] text-[#165041]">
                {service.description}
              </p>

              <a
                href={service.href}
                className="mt-[20px] inline-block self-center font-[family-name:var(--font-montserrat)] text-[14px] font-bold uppercase tracking-[1px] text-[#124336] transition-colors duration-300 hover:text-[#3bdbb1]"
              >
                – Read more –
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
