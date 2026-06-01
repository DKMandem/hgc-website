import Image from "next/image";
import Link from "next/link";

export function SSCSection() {
  return (
    <section className="flex w-full flex-col lg:flex-row">
      {/* Left: photo */}
      <div className="relative min-h-[280px] w-full lg:min-h-[500px] lg:w-1/2">
        <Image
          src="/images/handshakepic3vertical.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Right: copy */}
      <div className="flex w-full items-center bg-white px-[30px] py-[60px] lg:w-1/2 lg:px-[80px] lg:py-[80px]">
        <div className="w-full">
          <h3
            className="font-sans"
            style={{
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: "55px",
              letterSpacing: "-1px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            Our Firm
          </h3>

          <hr className="my-[24px] w-full max-w-[468px] border-0 border-t-[1.77px] border-[#90cc57]" />

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            At Hansen Global Consult, we help companies identify and secure the
            executive and commercial leadership talent needed to accelerate
            growth in the U.S. market. Whether you are seeking your next C-suite
            executive, senior commercial leader, or Specialist, we connect
            best-in-class talent with forward-thinking companies.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Hansen Global Consult brings more than 15 years of international
            executive search, recruitment, and leadership development experience
            gained through globally respected organizations, including the
            European Parliament, Mercuri Urval, and the World Bank Group in
            Washington, D.C.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            With advanced expertise in leadership evaluation and scientifically
            validated assessment methodologies, we deliver talent solutions
            designed to strengthen leadership teams, reduce hiring risk, and
            drive measurable business outcomes. We partner closely with
            companies to understand their strategic objectives, organizational
            culture, and growth ambitions&mdash;ensuring every search delivers
            leaders who create both immediate impact and long-term value.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "0",
              textAlign: "justify",
            }}
          >
            If your company is expanding in the U.S. market, we would welcome the
            opportunity to discuss how Hansen Global Consult can support your
            growth.
          </p>

          <Link
            href="/expertise"
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
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
