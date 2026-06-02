"use client";

import { useEffect, useRef, useState } from "react";

type Pillar = { title: string; points: string[] };

type Paragraph = { label?: string; text: string };

type Service = {
  id: string;
  tab: string;
  eyebrow: string;
  tagline: string;
  intro: Paragraph[];
  pillars: [Pillar, Pillar];
  taglineHighlight?: string;
  impact?: { text: string; highlight?: string };
};

const SERVICES: Service[] = [
  {
    id: "executive-search",
    tab: "Executive Search",
    eyebrow: "Executive Search · Professional Recruitment",
    tagline: "Secure leaders who shape your future success",
    taglineHighlight: "shape your future success",
    intro: [
      {
        text: "Leadership appointments are among the most important decisions a company makes. We bring the structure, market knowledge, and discretion those decisions require.",
      },
      {
        text: "Our global executive search process is built to identify the strongest available talent — leaders who will not only meet your requirements but raise the level of your company.",
      },
      {
        text: "We hold to every agreed milestone and timeline, providing continuous support through to offer acceptance and beyond.",
      },
      {
        text: "Our clients receive consistent, senior-level attention throughout the entire search — with full transparency at every stage.",
      },
      {
        text: "Our process includes a thorough analysis of your needs, deep knowledge of the relevant talent market, a targeted and discreet candidate strategy, rigorous assessment and benchmarking, and personalized onboarding and integration support — delivered globally.",
      },
      {
        label: "Executive Search",
        text: "Should a placed candidate depart within the first twelve months, we conduct a full replacement search at no additional placement fee. This is our commitment to every client engagement.",
      },
      {
        label: "Professional Recruitment",
        text: "Should a placed candidate depart within the 3-6 months, we conduct a full replacement search at no additional placement fee. This is our commitment to every client engagement.",
      },
    ],
    pillars: [
      {
        title: "Identifying the talent your company requires",
        points: [
          "We work with you to define the skills and qualities that are genuinely critical to success, removing criteria that introduce bias or reduce the quality of your candidate pool.",
          "We build a comprehensive, research-driven search strategy that extends into non-traditional and often overlooked talent markets to ensure full market coverage.",
          "We combine a thorough understanding of your company with an extensive network and a disciplined sourcing approach to deliver the strongest candidates for your role.",
        ],
      },
      {
        title: "Selecting the leader positioned to succeed",
        points: [
          "With more than 15 years of experience placing senior executives and specialist leaders, we have the depth of knowledge to assess fit with precision and confidence.",
          "Our evaluation process is grounded in objective data and demonstrated performance — assessing each candidate on merit, independent of background or affiliation.",
          "Our assessment tools evaluate professional track record, leadership values, and long-term potential within the specific context of your company.",
        ],
      },
    ],
  },
  {
    id: "talent-assessment",
    tab: "Talent Assessment",
    eyebrow: "Talent Assessment Services",
    tagline:
      "Our structured assessment process raises hiring decision success rates from 60% to 94% — giving your company a significant advantage over standard interview-based selection",
    taglineHighlight: "success rates from 60% to 94%",
    intro: [
      {
        text: "We assess the current strengths of your team and identify the capabilities you need to build or acquire to drive stronger results. Our assessment tools are held to the highest standards of reliability and are grounded in leading research and best practice. At the core of our assessment process is an in-depth, competency-based interview that integrates professional experience, cognitive ability, and personality evaluation.",
      },
      {
        text: "The assessment interview can be supplemented with a range of behavioral assessment tools, tailored to meet your specific needs. We offer a broad set of assessment tools and methods, including individual and team assessments, custom assessment centers, 360-degree multi-feedback surveys, and talent reviews.",
      },
      {
        text: "Every solution we propose is customized to your situation. We work closely with you to ensure the approach is the right fit — and that the results are actionable.",
      },
    ],
    pillars: [
      {
        title: "Measuring performance potential",
        points: [
          "We help you identify and prioritize the skills and competencies your people need to drive future success.",
          "We measure the potential of individuals and teams against the specific requirements of your company.",
          "We identify capability strengths, gaps, and development opportunities to predict future performance with confidence.",
        ],
      },
      {
        title: "Predicting future success",
        points: [
          "With more than 15 years of experience assessing talent, we deliver the right hiring and development guidance to meet your company's future capability needs.",
          "Our evaluation process treats every individual fairly — structured to minimize bias and ensure evidence is gathered consistently and objectively.",
          "We tailor every solution to your specific situation and work closely with you to ensure the outcome is exactly right.",
        ],
      },
    ],
  },
  {
    id: "leadership-advisory",
    tab: "Leadership Development",
    eyebrow: "Leadership Development Services",
    tagline: "Our process turns leadership potential into measurable performance",
    taglineHighlight: "measurable performance",
    intro: [
      {
        text: "Effective leadership drives performance, attracts and retains high-performing executives, sharpens strategy execution, and builds the resilience to navigate change.",
      },
      {
        text: "We work closely with you to unlock the full potential of your people and strengthen the results your company delivers.",
      },
      {
        text: "Our approach draws on carefully selected assessments, behavioral exercises, executive coaching, targeted training, and structured knowledge-sharing practices.",
      },
      {
        text: "Every program can be aligned to your existing competency frameworks and is designed to support a high-performance culture, improve results, and build a growth-oriented mindset across your leadership team.",
      },
    ],
    pillars: [
      {
        title: "Assessing your current leadership gaps",
        points: [
          "We partner with your company to build the conditions for strong leadership — aligned to your vision, mission, and strategy.",
          "We help you make full use of your available talent, applying consistent and merit-based principles across your leadership pipeline.",
          "Our development assessments are based on the Big Five Personality Inventory — one of the most widely recognized and validated frameworks for measuring leadership potential.",
        ],
      },
      {
        title: "Elevating your leadership capabilities",
        points: [
          "With more than 15 years of experience developing individuals and teams, we deliver targeted advice that strengthens your company's leadership at every level.",
          "We use purpose-built tools and methods to increase future potential and drive measurable improvement in company performance.",
          "We start with your strategy — where you are today and where you need to go — and work closely with you to close the gap.",
        ],
      },
    ],
  },
];

function ImpactText({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span style={{ color: "#3bdbb1", fontWeight: 700 }}>{highlight}</span>
      {after}
    </>
  );
}

export function ExpertiseServices() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (!requested) return;
    const index = SERVICES.findIndex((s) => s.id === requested);
    if (index === -1) return;
    // Intentional post-mount sync from the URL to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(index);
    // Wait for layout, then bring the Services section into view. The section
    // carries scroll-mt to clear the sticky 70px header.
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full scroll-mt-[70px] bg-white px-[30px] py-[80px] lg:py-[90px]"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="text-center">
          <h2
            className="font-[family-name:var(--font-montserrat)] font-bold text-[#124336] text-[40px] xl:text-[48px]"
            style={{ lineHeight: "1.1", letterSpacing: "-2px", margin: 0 }}
          >
            Services
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-[36px] flex justify-center">
          <div
            role="tablist"
            aria-label="Services"
            className="inline-flex flex-wrap justify-center gap-[4px] rounded-full bg-[#f1f3f1] p-[6px]"
          >
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${s.id}`}
                  id={`tab-${s.id}`}
                  onClick={() => setActive(i)}
                  className={`font-sans transition-colors duration-300 ${
                    isActive ? "" : "hover:bg-[rgba(18,67,54,0.06)]"
                  }`}
                  style={{
                    padding: "14px 28px",
                    borderRadius: "30px",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: isActive ? "#124336" : "transparent",
                    color: isActive ? "#fff" : "#124336",
                    boxShadow: isActive
                      ? "0 6px 16px rgba(18,67,54,0.22)"
                      : "none",
                  }}
                >
                  {s.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`panel-${service.id}`}
          aria-labelledby={`tab-${service.id}`}
          key={service.id}
          className="oz-fade-in mt-[48px]"
        >
          {/* Intro */}
          <div className="mx-auto max-w-[820px] text-center">
            <h3
              className="font-sans font-bold text-[#124336]"
              style={{
                fontSize: "30px",
                lineHeight: "1.18",
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              <ImpactText
                text={service.tagline}
                highlight={service.taglineHighlight}
              />
            </h3>
            <hr className="mx-auto my-[24px] w-[80px] border-0 border-t-[2px] border-[#3bdbb1]" />
          </div>

          <div className="w-full">
            {service.intro.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  lineHeight: "26px",
                  color: "#124336",
                  marginBottom: i === service.intro.length - 1 ? "0" : "16px",
                  textAlign: "justify",
                }}
              >
                {p.label ? (
                  <strong style={{ fontWeight: 700 }}>{p.label}</strong>
                ) : null}
                {p.label ? ": " : null}
                {p.text}
              </p>
            ))}
          </div>

          {/* Pillar cards */}
          <div className="mt-[40px] grid grid-cols-1 gap-[24px] md:grid-cols-2">
            {service.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col overflow-hidden rounded-[12px] shadow-[0_10px_30px_rgba(18,67,54,0.10)]"
              >
                <div
                  className="font-sans text-center"
                  style={{
                    backgroundColor: "#3bdbb1",
                    color: "#124336",
                    padding: "20px 26px",
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: "1.25",
                  }}
                >
                  {pillar.title}
                </div>
                <div
                  className="flex-1"
                  style={{ backgroundColor: "#1e3a30", padding: "24px 26px" }}
                >
                  <ul className="m-0 list-none p-0">
                    {pillar.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative"
                        style={{
                          paddingLeft: "26px",
                          marginBottom:
                            i === pillar.points.length - 1 ? "0" : "16px",
                          fontFamily:
                            "var(--font-plus-jakarta-sans), sans-serif",
                          fontSize: "15px",
                          fontWeight: 300,
                          lineHeight: "1.5",
                          color: "#eaf2ec",
                        }}
                      >
                        <span
                          className="absolute"
                          style={{
                            left: 0,
                            top: "7px",
                            width: "9px",
                            height: "9px",
                            borderRadius: "50%",
                            backgroundColor: "#3bdbb1",
                          }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Impact band */}
          {service.impact ? (
            <div
              className="mt-[40px] rounded-[14px] px-[40px] py-[34px] text-center"
              style={{
                background:
                  "linear-gradient(125deg, #237651 0%, #134a37 45%, #07271c 100%)",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontWeight: 300,
                  fontSize: "24px",
                  lineHeight: "1.4",
                  color: "#fff",
                  margin: 0,
                }}
              >
                <ImpactText
                  text={service.impact.text}
                  highlight={service.impact.highlight}
                />
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
