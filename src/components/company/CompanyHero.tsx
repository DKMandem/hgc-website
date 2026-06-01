import Link from "next/link";
import { ArrowCircleRightIcon } from "@/components/icons";

export function CompanyHero() {
  return (
    <section
      data-hero
      className="relative w-full overflow-hidden h-[700px] xl:h-[900px]"
    >
      {/* Background photo layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover"
        style={{
          backgroundImage: "url(/images/middleagehandshakelady-fixd.png)",
          backgroundPosition: "68% 50%",
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
              className="m-0 ml-[-3px] text-left font-[family-name:var(--font-montserrat)] font-normal text-[36px] leading-[40px] xl:text-[52px] xl:leading-[56px]"
              style={{ letterSpacing: "-2px", marginTop: "16px" }}
            >
              <span style={{ color: "#fff" }}>{"Elevating Your "}</span>
              <span style={{ color: "#3bdbb1" }}>Talent Strategy</span>
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
              We help companies attract, assess, and develop exceptional
              leaders and specialists.
            </p>

            <p
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontSize: "18px",
                fontWeight: 300,
                color: "#fff",
                lineHeight: "30px",
                marginTop: "16px",
                marginBottom: "0",
                maxWidth: "520px",
                textAlign: "justify",
              }}
            >
              We believe that engaged, high-performing people are the most
              sustainable driver of long-term business success. The right
              leadership and expertise strengthen company performance,
              accelerate growth, and create lasting impact.
            </p>

            <Link
              href="/company#team"
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
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
