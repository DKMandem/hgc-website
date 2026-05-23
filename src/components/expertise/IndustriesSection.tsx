import { CheckCircleIcon } from "@/components/icons";

const INDUSTRIES = [
  "Automotive",
  "Biotechnology",
  "Energy",
  "Industrial Automation",
  "Machinery",
  "Material Handling",
  "Medical Devices",
  "Packaging",
  "Plastics",
  "Renewable Energy",
] as const;

export function IndustriesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] px-[30px] py-[80px]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-[40px] lg:flex-row">
        {/* Left ~40% */}
        <div className="w-full lg:w-2/5">
          <h3
            className="font-sans font-bold text-[#124336] text-[40px] xl:text-[44px]"
            style={{
              lineHeight: "1.15",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Industries we serve
          </h3>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "#124336",
              marginTop: "16px",
              marginBottom: "0",
              lineHeight: "1.5",
            }}
          >
            We work across a broad range of industries, delivering high-caliber
            executive and professional talent.
          </p>

          <a
            href="mailto:info@oertzengroup.com?subject=Appointment%20Request%20via%20OERTZENGroup%20Website"
            className="mt-[24px] inline-block font-sans uppercase transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: "#124336",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Set up an appointment
          </a>
        </div>

        {/* Right ~60% */}
        <div className="w-full lg:w-3/5">
          <ul className="grid grid-cols-2 gap-x-[24px] gap-y-[14px] m-0 p-0 list-none">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="flex flex-row items-start"
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#124336",
                }}
              >
                <CheckCircleIcon className="h-[18px] w-[18px] shrink-0 mr-[10px] text-[#90cc57] mt-[3px]" />
                <span>{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
