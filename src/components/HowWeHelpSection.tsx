"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HELP_ITEMS = [
  "We work closely with leadership teams to understand your company, growth plans, and hiring priorities.",
  "We help companies build the leadership needed to enter new markets, expand regions, and drive growth.",
  "Our search focuses on commercial, operational, and leadership talent that can support long-term growth.",
  "We assess candidates against the role, market context, leadership profile, and company culture.",
  "We provide targeted, research-driven search built around each assignment and organization.",
] as const;

export function HowWeHelpSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex w-full flex-col bg-white lg:flex-row">
      {/* Left column — white, numbered list */}
      <div className="flex w-full flex-col justify-center px-[24px] py-[60px] lg:w-1/2 lg:px-[90px] lg:py-[100px]">
        <p
          className="m-0 mb-[12px] font-sans text-[14px] font-normal text-[#124336]"
          style={{ letterSpacing: "0" }}
        >
          Market Expansion · Commercial Leadership · Partner-Led Search
        </p>

        <h3
          className="m-0 font-[family-name:var(--font-montserrat)] font-bold text-[#165041] text-[40px] leading-[48px] xl:text-[48px] xl:leading-[57.6px]"
          style={{ letterSpacing: "-2.4px" }}
        >
          How we can help
        </h3>

        <ol className="mt-[36px] mb-0 list-none p-0">
          {HELP_ITEMS.map((item, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            const isLast = idx === HELP_ITEMS.length - 1;
            return (
              <li
                key={num}
                className={`flex flex-row items-start ${isLast ? "pb-0" : "pb-[28px]"}`}
              >
                <span
                  className="mr-[20px] w-[40px] shrink-0 font-[family-name:var(--font-montserrat)] text-[28px] font-normal text-[#3bdbb1]"
                  style={{ lineHeight: "47.6px", letterSpacing: "-1.4px" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <span
                  className="font-[family-name:var(--font-montserrat)] text-[18px] font-normal text-[#165041] xl:text-[20px]"
                  style={{ lineHeight: "28px", letterSpacing: "-1px" }}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ol>

        <a
          href="/connect/"
          className="mt-[40px] inline-block self-start rounded-[20px] bg-[#124336] px-[30px] py-[14px] font-sans text-[14px] font-medium leading-none text-white transition-transform duration-300 hover:scale-110"
        >
          Discuss Your Search
        </a>
      </div>

      {/* Right column — dark green panel with oval image popup */}
      <div
        className="relative flex w-full items-center justify-center overflow-hidden p-[40px] lg:w-1/2 lg:p-[60px]"
        style={{
          background:
            "linear-gradient(125deg, #237651 0%, #134a37 45%, #07271c 100%)",
          minHeight: "420px",
        }}
      >
        <div
          ref={imgRef}
          className="relative aspect-[3/4] w-full max-w-[460px]"
          style={{
            transformOrigin: "center center",
            transition:
              "transform 900ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 700ms ease-out",
            transform: visible ? "scale(1)" : "scale(0.6)",
            opacity: visible ? 1 : 0,
          }}
        >
          <Image
            src="/images/office-building.jpg"
            alt="Hansen Global Consult office"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            style={{ borderRadius: "50%" }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
