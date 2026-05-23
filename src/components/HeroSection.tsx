"use client";

import { useEffect, useState } from "react";
import { ArrowCircleRightIcon } from "@/components/icons";

export function HeroSection() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setSwapped(true), 8000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden h-[700px] xl:h-[900px]"
    >
      {/* Layer 1a: initial background image (z-0) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover"
        style={{
          backgroundImage: "url(/images/middleagehandshakelady-fixd.png)",
          backgroundPosition: "68% 50%",
        }}
      />
      {/* Layer 1b: second image, fades in once after 8s and stays.
          Oversized to 120% so we have horizontal pan room (the natural
          1536×1024 image fits to width under bg-cover, leaving 0px to pan).
          Position 0% pushes the man right so only his ear sits under the
          green panel instead of his eye. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/manshakinghand1-fixd.png)",
          backgroundSize: "110% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 30%",
          opacity: swapped ? 1 : 0,
          transition: "opacity 1500ms ease-in-out",
        }}
      />

      {/* Centered 1200px container so the blue panel aligns with the
          navy header block (both start at the container's left edge) */}
      <div className="relative z-10 mx-auto h-full w-full xl:max-w-[1200px]">
        {/* Layer 2 + 3: blue gradient panel — full width on mobile,
            fixed 600px left-aligned box on desktop (aligns w/ header navy) */}
        <div
          className="oz-fade-in flex h-full min-h-full w-full flex-col justify-start px-[20px] py-[50px] md:pl-[60px] md:pr-[120px] md:pt-[40px] md:pb-0 xl:w-[600px] xl:px-[80px] xl:pt-[100px] xl:pb-[50px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(18,67,54,0.88) 0%, #124336 100%)",
          }}
        >
        <div className="w-full max-w-[600px]">
          <h3
            className="oz-fade-in-up m-0 ml-[-3px] text-left font-[family-name:var(--font-montserrat)] font-normal text-[54px] leading-[54px] xl:text-[80px] xl:leading-[80px]"
            style={{ letterSpacing: "-3px" }}
          >
            <span style={{ color: "#fff" }}>Your </span>
            <span style={{ color: "#3bdbb1" }}>search</span>{" "}
            <span style={{ color: "#fff" }}>stops here</span>
          </h3>

          <p
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
            Executive Search · Leadership Recruitment · Talent Advisory
          </p>

          <p
            className="font-extralight"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 200,
              color: "#fff",
              lineHeight: "30px",
              marginTop: "24px",
              marginBottom: "14.4px",
              maxWidth: "520px",
              textAlign: "justify",
            }}
          >
            OERTZENGroup is an Executive Search and Professional Recruitment
            firm serving European clients with an established footprint in
            North America as well as those looking to enter these markets. Our
            specialty includes the search for C-level Executives and
            mid-management professionals.
          </p>

          <a
            href="/company/"
            className="oz-hero-btn inline-flex items-center gap-[10px] font-sans uppercase"
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
          </a>
        </div>
        </div>
      </div>

      <style>{`
        .oz-hero-btn {
          transition: transform 0.3s ease;
        }
        .oz-hero-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
