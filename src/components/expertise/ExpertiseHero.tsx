import Link from "next/link";
import { ArrowCircleRightIcon } from "@/components/icons";

export function ExpertiseHero() {
  return (
    <section
      data-hero
      className="relative w-full overflow-hidden h-[700px] xl:h-[900px]"
    >
      {/* Right-side photo layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/handshakelady.png)",
        }}
      />

      {/* Centered 1200px container so the green panel aligns with header */}
      <div className="relative z-10 mx-auto h-full w-full xl:max-w-[1200px]">
        <div
          className="flex h-full min-h-full w-full flex-col justify-start px-[20px] py-[50px] md:pl-[60px] md:pr-[120px] md:pt-[40px] md:pb-0 xl:w-[600px] xl:px-[80px] xl:pt-[100px] xl:pb-[50px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(18,67,54,0.88) 0%, #124336 100%)",
          }}
        >
          <div className="w-full max-w-[600px]">
            <h2
              className="m-0 ml-[-3px] text-left font-[family-name:var(--font-montserrat)] font-normal text-[54px] leading-[54px] text-white xl:text-[80px] xl:leading-[80px]"
              style={{ letterSpacing: "-3px", marginTop: "16px" }}
            >
              Expertise
            </h2>

            <p
              className="font-sans"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "rgb(240,240,240)",
                letterSpacing: "3px",
                marginTop: "32px",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              Executive Search · Professional Recruitment · Leadership Development
            </p>

            <p
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                color: "#fff",
                lineHeight: "30px",
                marginTop: "24px",
                marginBottom: "0",
                maxWidth: "520px",
                textAlign: "justify",
              }}
            >
              At Hansen Global Consult, we combine over 15 years of executive
              search and talent advisory experience to help companies secure
              leadership that delivers measurable impact.
            </p>

            <p
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                color: "#fff",
                lineHeight: "30px",
                marginTop: "24px",
                marginBottom: "0",
                maxWidth: "520px",
                textAlign: "justify",
              }}
            >
              We go beyond traditional search. By developing a deep understanding
              of your business, culture, and strategic priorities, we identify
              leaders who not only fit but elevate your company.
            </p>

            <p
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                color: "#fff",
                lineHeight: "30px",
                marginTop: "24px",
                marginBottom: "0",
                maxWidth: "520px",
                textAlign: "justify",
              }}
            >
              Through a combination of market intelligence, rigorous assessment,
              and close partnership, we ensure every hire strengthens your
              leadership team and supports your long-term growth.
            </p>

            <Link
              href="/connect"
              className="inline-flex items-center gap-[10px] font-sans uppercase transition-transform duration-300 hover:scale-110"
              style={{
                backgroundColor: "#3bdbb1",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                border: "none",
                marginTop: "24px",
              }}
            >
              <ArrowCircleRightIcon className="h-[15px] w-[15px]" />
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
