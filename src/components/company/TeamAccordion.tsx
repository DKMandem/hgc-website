"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { team, type TeamMember } from "./teamData";
import { LinkedinIcon, EnvelopeIcon } from "@/components/icons";

const GREEN = "#124336"; // primary brand green (text)
const ACCENT = "#127d68"; // teal-green for outline buttons / links
const EASE = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
// How much wider the highlighted panel is vs. a collapsed slice. Higher = more dominant/wider.
const EXPANDED_GROW = 2.4;
// Strip height, and the global cap on the highlighted panel's width. The cap keeps the expanded
// panel no wider than a portrait photo's natural width at this height, so `cover` stays locked to
// the height and never scales the image up — selecting widens-to-reveal instead of zooming in.
const PANEL_H = 520;
const EXPANDED_MAX_W = 420;
// Hover-intent: dragging across the strip only switches once the cursor reaches the central band
// of a photo AND lingers for HOVER_DELAY ms. Stops rapid flicker when sweeping across people,
// while still allowing selection by just moving the mouse (no click needed).
const HOVER_DELAY = 200; // ms the cursor must settle before the switch commits
const CENTER_LO = 0.35; // central band of a panel (fraction of width) that arms the switch
const CENTER_HI = 0.65;

export function TeamAccordion() {
  const [activeSlug, setActiveSlug] = useState(team[0].slug);
  const active = team.find((m) => m.slug === activeSlug) ?? team[0];

  const expandedSlug = activeSlug;

  // Pending hover-intent timer (so a fast sweep across people doesn't trigger a switch).
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef<string | null>(null);

  const cancelPending = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    pendingRef.current = null;
  };

  const armSwitch = (slug: string) => {
    if (slug === activeSlug || pendingRef.current === slug) return;
    cancelPending();
    pendingRef.current = slug;
    timerRef.current = setTimeout(() => {
      setActiveSlug(slug);
      timerRef.current = null;
      pendingRef.current = null;
    }, HOVER_DELAY);
  };

  const selectNow = (slug: string) => {
    cancelPending();
    setActiveSlug(slug);
  };

  useEffect(() => cancelPending, []);

  return (
    <div className="w-full">
      {/* ── Horizontal image accordion (desktop) ─────────────────── */}
      <div
        className="hidden w-full overflow-hidden md:flex"
        style={{ height: `${PANEL_H}px` }}
        onMouseLeave={cancelPending}
      >
        {team.map((member) => {
          const isExpanded = member.slug === expandedSlug;
          const naturalW = Math.round(PANEL_H * (member.aspect ?? 0.81));
          const expandedW = Math.min(naturalW, EXPANDED_MAX_W);
          return (
            <button
              key={member.slug}
              type="button"
              onClick={() => selectNow(member.slug)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const relX = (e.clientX - rect.left) / rect.width;
                if (relX >= CENTER_LO && relX <= CENTER_HI) armSwitch(member.slug);
              }}
              onMouseLeave={cancelPending}
              aria-pressed={member.slug === activeSlug}
              aria-label={member.name}
              className="group relative block h-full cursor-pointer overflow-hidden focus:outline-none"
              style={{
                flexGrow: isExpanded ? EXPANDED_GROW : 1,
                flexBasis: 0,
                minWidth: "84px",
                maxWidth: isExpanded ? `${expandedW}px` : undefined,
                backgroundColor: member.fill,
                transition: `flex-grow 0.45s ${EASE}`,
              }}
            >
              {/* Background photo */}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${member.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: member.objectPosition ?? "50% 30%",
                  filter:
                    [
                      member.brightness ? `brightness(${member.brightness})` : null,
                      member.saturate ? `saturate(${member.saturate})` : null,
                    ]
                      .filter(Boolean)
                      .join(" ") || undefined,
                  transform:
                    [
                      member.zoom ? `scale(${member.zoom})` : null,
                      member.shiftY ? `translateY(${member.shiftY}%)` : null,
                    ]
                      .filter(Boolean)
                      .join(" ") || undefined,
                  transformOrigin: member.objectPosition ?? "50% 30%",
                }}
              />
              {/* Brand tint — strong on collapsed, light gradient on expanded */}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: isExpanded
                    ? "linear-gradient(to top, rgba(18,67,54,0.78) 0%, rgba(18,67,54,0.15) 38%, transparent 62%)"
                    : "linear-gradient(to top, rgba(18,67,54,0.62), rgba(18,67,54,0.52))",
                  transition: "background 0.45s ease",
                }}
              />

              {/* Collapsed: vertical name label */}
              <span
                aria-hidden={isExpanded}
                className="absolute bottom-5 left-1/2 -translate-x-1/2"
                style={{
                  writingMode: "vertical-rl",
                  transform: "translateX(-50%) rotate(180deg)",
                  color: "#ffffff",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                  opacity: isExpanded ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                }}
              >
                {member.name}
              </span>

              {/* Expanded: name + title overlay */}
              <span
                className="absolute bottom-0 left-0 right-0 p-6 text-left"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  transform: isExpanded ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.45s ease 0.1s, transform 0.45s ease 0.1s",
                  pointerEvents: "none",
                }}
              >
                <span
                  className="block font-bold text-white"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "24px",
                    lineHeight: 1.1,
                    textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {member.name}
                </span>
                <span
                  className="mt-1 block"
                  style={{
                    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.5px",
                    color: "rgba(255,255,255,0.92)",
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  {member.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Mobile fallback: tappable photo grid ─────────────────── */}
      <div className="grid grid-cols-3 gap-1 md:hidden">
        {team.map((member) => {
          const isActive = member.slug === activeSlug;
          return (
            <button
              key={member.slug}
              type="button"
              onClick={() => setActiveSlug(member.slug)}
              className="relative aspect-[3/4] overflow-hidden focus:outline-none"
              style={{ backgroundColor: member.fill }}
              aria-pressed={isActive}
            >
              <span
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${member.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: member.objectPosition ?? "50% 30%",
                  transform: member.zoom ? `scale(${member.zoom})` : undefined,
                  transformOrigin: member.objectPosition ?? "50% 30%",
                }}
              />
              <span
                className="absolute inset-0"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(18,67,54,0.75), transparent 60%)"
                    : "rgba(18,67,54,0.45)",
                  outline: isActive ? `3px solid ${ACCENT}` : "none",
                  outlineOffset: "-3px",
                }}
              />
              <span
                className="absolute bottom-1 left-0 right-0 px-1 text-center text-[11px] font-semibold text-white"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {member.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Detail section ───────────────────────────────────────── */}
      <Detail key={active.slug} member={active} />
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
                  style={{ height: `${member.logoHeight ?? 38}px`, width: "auto" }}
                />
              </a>
            ) : (
              <div className="mt-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.logo}
                  alt={`${member.name} affiliation logo`}
                  style={{ height: `${member.logoHeight ?? 38}px`, width: "auto" }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
