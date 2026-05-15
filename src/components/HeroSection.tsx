"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UnderlineMarker, ArrowCircleRightIcon } from "@/components/icons";

const SLIDES = [
  "/images/hero-slide-1.jpg",
  "/images/hero-slide-2.jpg",
  "/images/hero-slide-3.jpg",
  "/images/hero-slide-4.jpg",
  "/images/hero-slide-5.jpg",
] as const;

const SLIDE_INTERVAL_MS = 5000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden h-[700px] xl:h-[900px]"
    >
      {/* Layer 1: slideshow (z-0) */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={src}
              aria-hidden="true"
              className="absolute inset-0 bg-cover transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: "50% 0%",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1.3)" : "scale(1)",
                transformOrigin: "center center",
                transition:
                  "opacity 1000ms ease-in-out, transform 6000ms ease-out",
                willChange: "opacity, transform",
              }}
            />
          );
        })}
      </div>

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
          <Image
            src="/images/hgc-logo-lightest-transparent.png"
            alt=""
            width={110}
            height={110}
            className="oz-hero-circle mb-[24px] ml-[-22px] h-[110px] w-[110px] object-contain"
          />
          <h3
            className="oz-fade-in-up m-0 ml-[-3px] text-left font-sans font-normal text-[54px] leading-[54px] xl:text-[80px] xl:leading-[80px]"
            style={{ letterSpacing: "-3px" }}
          >
            <span style={{ color: "#fff" }}>Your </span>
            <span
              className="relative inline-block"
              style={{ color: "#3bdbb1" }}
            >
              search
              <UnderlineMarker
                className="oz-hero-marker absolute left-0"
                pathClassName="oz-hero-underline-path"
              />
            </span>{" "}
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
            Executive Search · Professional Recruitment
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
        .oz-hero-marker {
          width: 100%;
          height: 0.4em;
          bottom: -0.18em;
          overflow: visible;
        }
        .oz-hero-underline-path {
          stroke: #fff;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: oz-underline-draw 1200ms ease-out 400ms forwards;
        }
        .oz-hero-btn {
          transition: transform 0.3s ease;
        }
        .oz-hero-btn:hover {
          transform: scale(1.1);
        }
        .oz-hero-circle {
          transition: transform 0.6s ease;
        }
        .oz-hero-circle:hover {
          transform: rotate(360deg);
        }
      `}</style>
    </section>
  );
}
