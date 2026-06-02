import Image from "next/image";

type Industry = {
  name: string;
  image: string | null;
  // CSS object-position for the cropped image; defaults to "center".
  position?: string;
};

const INDUSTRIES: Industry[] = [
  { name: "MedTech", image: "/images/industry-pharma.jpg" },
  {
    name: "Robotic & Automation",
    image: "/images/industry-RoboticandAutomation.jpg",
    // Robot sits left-of-center; pull the crop left so it centers in frame.
    position: "15% center",
  },
  { name: "IT & Data Centers", image: "/images/industry-itanddatacenter.webp" },
  { name: "Manufacturing", image: "/images/industry-manufactoring.webp" },
  { name: "Food & Beverage", image: "/images/industry-foodandbeverage.webp" },
  { name: "Consumer Goods", image: "/images/industry-consumergoods.jpg" },
];

export function TopIndustriesSection() {
  return (
    <section className="bg-white px-[24px] pb-[80px] pt-[24px] lg:px-[100px] lg:pb-[120px] lg:pt-[36px]">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className="text-center font-[family-name:var(--font-montserrat)] text-[40px] font-bold text-[#124336] xl:text-[48px]"
          style={{ letterSpacing: "-2px" }}
        >
          Top <span className="text-[#3bdbb1]">Industries</span> We Work With
        </h2>

        <div className="mt-[56px] grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.name}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px]"
            >
              {industry.image ? (
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectPosition: industry.position ?? "center" }}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              ) : (
                <div
                  className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  style={{
                    background:
                      "linear-gradient(135deg, #237651 0%, #134a37 50%, #07271c 100%)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Bottom gradient scrim for label legibility */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7,39,28,0.85) 0%, rgba(7,39,28,0.25) 45%, rgba(7,39,28,0) 70%)",
                }}
              />

              <h3
                className="absolute inset-x-0 bottom-0 p-[20px] font-[family-name:var(--font-montserrat)] text-[20px] font-bold uppercase text-white xl:text-[22px]"
                style={{ letterSpacing: "0.5px" }}
              >
                {industry.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
