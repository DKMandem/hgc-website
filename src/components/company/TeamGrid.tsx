"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { team, type TeamMember } from "./teamData";
import { LinkedinIcon, EnvelopeIcon } from "@/components/icons";

const GREEN = "#124336"; // primary brand green (text)
const ACCENT = "#127d68"; // teal-green for outline buttons / links

const GROUPS: { label: string; match: (m: TeamMember) => boolean }[] = [
  { label: "Our Team", match: (m) => !m.advisor },
  { label: "Our Advisors", match: (m) => !!m.advisor },
];

export function TeamGrid() {
  const [activeSlug, setActiveSlug] = useState(team[0].slug);
  const active = team.find((m) => m.slug === activeSlug) ?? team[0];
  const detailRef = useRef<HTMLDivElement>(null);

  const select = (slug: string) => {
    setActiveSlug(slug);
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      {/* ── Spaced photo grids: "Our Team", then "Our Advisors" ───── */}
      {GROUPS.map((group) => (
        <div
          key={group.label}
          className="mx-auto mb-[72px] max-w-[1100px] px-[30px] last:mb-0"
        >
          <h4
            className="mb-8"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "-0.3px",
              color: GREEN,
            }}
          >
            {group.label}
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-14">
            {team.filter(group.match).map((member) => {
              const isActive = member.slug === activeSlug;
              return (
                <button
                  key={member.slug}
                  type="button"
                  onClick={() => select(member.slug)}
                  aria-pressed={isActive}
                  className="group block cursor-pointer self-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#127d68] focus-visible:ring-offset-4"
                >
                  <span
                    className="relative block aspect-[4/5] w-full overflow-hidden"
                    style={{ backgroundColor: member.fill ?? "#e0e0e0" }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: member.objectPosition ?? "50% 30%",
                        filter:
                          [
                            member.brightness
                              ? `brightness(${member.brightness})`
                              : null,
                            member.saturate
                              ? `saturate(${member.saturate})`
                              : null,
                          ]
                            .filter(Boolean)
                            .join(" ") || undefined,
                        transform:
                          [
                            member.zoom ? `scale(${member.zoom})` : null,
                            member.shiftY
                              ? `translateY(${member.shiftY}%)`
                              : null,
                          ]
                            .filter(Boolean)
                            .join(" ") || undefined,
                        transformOrigin: member.objectPosition ?? "50% 30%",
                      }}
                    />
                    {/* Soft brand tint on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[#124336] opacity-0 transition-opacity duration-300 group-hover:opacity-15"
                    />
                    {/* Selected marker */}
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 right-0 h-[5px] transition-opacity duration-300"
                      style={{
                        backgroundColor: ACCENT,
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                  </span>

                  <span
                    className="mt-4 block font-bold"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "18px",
                      lineHeight: 1.2,
                      color: GREEN,
                    }}
                  >
                    {member.name}
                  </span>
                  <span
                    className="mt-2 block uppercase"
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      lineHeight: 1.5,
                      color: GREEN,
                      opacity: 0.75,
                    }}
                  >
                    {member.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* ── Detail section ───────────────────────────────────────── */}
      <div ref={detailRef} className="scroll-mt-[100px]">
        <Detail key={active.slug} member={active} />
      </div>
    </div>
  );
}

function Detail({ member }: { member: TeamMember }) {
  return (
    <div
      className="mx-auto max-w-[920px] px-[30px] py-[64px]"
      style={{ animation: "oz-fade-in 0.5s ease-out both" }}
    >
      {/* Name + title */}
      <p
        className="text-center font-bold"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "42px",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          color: GREEN,
          lineHeight: 1.1,
        }}
      >
        {member.name}
      </p>
      <p
        className="mt-2 text-center"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
          fontSize: "19px",
          fontWeight: 400,
          color: GREEN,
          opacity: 0.85,
        }}
      >
        {member.title}
      </p>

      {/* Bio — supports multiple paragraphs separated by a blank line */}
      <div className="mx-auto mt-7 max-w-[780px]">
        {member.bio.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-center"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "17px",
              lineHeight: "30px",
              fontWeight: 300,
              color: "#2a4a40",
              marginTop: i === 0 ? 0 : "18px",
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Photo + quote + contact buttons */}
      <div className="mt-12 grid grid-cols-1 items-center gap-10 sm:grid-cols-[260px_1fr]">
        <div
          className="relative mx-auto h-[300px] w-full max-w-[260px] overflow-hidden sm:mx-0"
          style={{ backgroundColor: member.fill ? "#e0e0e0" : undefined }}
        >
          <Image
            src={member.img}
            alt={member.name}
            fill
            sizes="260px"
            className="object-cover"
            style={{
              filter: "grayscale(1)",
              objectPosition: member.objectPosition ?? "50% 30%",
              transform: member.zoom ? `scale(${member.zoom})` : undefined,
              transformOrigin: member.objectPosition ?? "50% 30%",
            }}
          />
        </div>

        <div>
          {member.quote && (
            <blockquote
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "27px",
                lineHeight: "40px",
                fontWeight: 600,
                color: GREEN,
              }}
            >
              “ {member.quote} ”
            </blockquote>
          )}

          <div className="mt-7 flex flex-wrap gap-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:bg-[#127d68] hover:text-white"
                style={{
                  border: `2px solid ${ACCENT}`,
                  color: ACCENT,
                  fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "12px 24px",
                }}
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
                {member.name.split(" ")[0]} on LinkedIn
              </a>
            )}
            <a
              href="#more"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("more")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 transition-colors hover:bg-[#127d68] hover:text-white"
              style={{
                border: `2px solid ${ACCENT}`,
                color: ACCENT,
                fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                padding: "12px 24px",
              }}
            >
              <EnvelopeIcon className="h-[18px] w-[18px]" />
              Contact Us
            </a>
          </div>

          {member.logo &&
            (member.logoLink ? (
              <a
                href={member.logoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block transition-opacity hover:opacity-80"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.logo}
                  alt={`${member.name} affiliation logo`}
                  style={{
                    height: `${member.logoHeight ?? 38}px`,
                    width: "auto",
                  }}
                />
              </a>
            ) : (
              <div className="mt-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.logo}
                  alt={`${member.name} affiliation logo`}
                  style={{
                    height: `${member.logoHeight ?? 38}px`,
                    width: "auto",
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
