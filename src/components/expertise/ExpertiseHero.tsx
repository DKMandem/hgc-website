import Link from "next/link";
import { ArrowCircleRightIcon } from "@/components/icons";

export function ExpertiseHero() {
  return (
    <section className="relative w-full overflow-hidden h-[700px] xl:h-[900px]">
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
              "linear-gradient(125deg, #1c6249 0%, #134a37 45%, #0c3527 100%)",
          }}
        >
          <div className="w-full max-w-[600px]">
            <h5
              className="font-sans"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "rgb(240,240,240)",
                letterSpacing: "3px",
                marginTop: "16px",
                marginBottom: "0",
              }}
            >
              Executive Search · Professional Recruitment
            </h5>

            <h2
              className="m-0 ml-[-3px] text-left font-[family-name:var(--font-montserrat)] font-normal text-[54px] leading-[54px] text-white xl:text-[80px] xl:leading-[80px]"
              style={{ letterSpacing: "-3px", marginTop: "16px" }}
            >
              Expertise
            </h2>

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
              The OERTZENGroup is a multicultural firm finding high-quality
              candidates to fill permanent positions at mid- to senior-level
              management.
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
              We provide a Consultative approach to our customers with a deep
              cultural understanding of US marketplaces.
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
