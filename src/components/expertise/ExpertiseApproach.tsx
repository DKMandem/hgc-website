import Image from "next/image";
import Link from "next/link";
import { ArrowCircleRightIcon } from "@/components/icons";

export function ExpertiseApproach() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[60px] px-[20px] md:grid-cols-2 md:items-center md:px-[40px]">
        {/* Left: text */}
        <div>
          <h5
            className="font-sans"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#3bdbb1",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}
          >
            OUR APPROACH
          </h5>
          <h2
            className="font-[family-name:var(--font-montserrat)] font-normal text-[#124336]"
            style={{
              fontSize: "42px",
              lineHeight: "46px",
              letterSpacing: "-1.5px",
              marginBottom: "24px",
            }}
          >
            A Consultative Partnership
          </h2>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "17px",
              fontWeight: 300,
              color: "#444",
              lineHeight: "28px",
              marginBottom: "20px",
            }}
          >
            We work as an extension of your team, taking the time to understand
            your culture, your goals, and the challenges that matter most. Every
            engagement is guided by close collaboration and a shared commitment
            to getting it right.
          </p>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "17px",
              fontWeight: 300,
              color: "#444",
              lineHeight: "28px",
              marginBottom: "32px",
            }}
          >
            With deep cultural understanding of US and international marketplaces,
            we bridge the gap between exceptional talent and the organizations
            that need them.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-[10px] font-sans uppercase transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: "#124336",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              border: "none",
            }}
          >
            <ArrowCircleRightIcon className="h-[15px] w-[15px]" />
            Let&apos;s connect
          </Link>
        </div>

        {/* Right: image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[12px]">
          <Image
            src="/images/office-building.jpg"
            alt="Our approach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
