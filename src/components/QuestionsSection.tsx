import { LogoSphere } from "@/components/LogoSphere";

const QUESTIONS = [
  "Does your recruiting partner adequately represent your brand?",
  "Is your organization new to the U.S. market and seeking a subject-matter expert?",
  "Have your passive methods to find talent not produced satisfactory results?",
  "Are you looking for a trusted partner with an international mindset?",
  "Is your HR department maxed out and overwhelmed by other tasks?",
  "Is your answer YES to one or more of these questions? Let's talk!",
] as const;

export function QuestionsSection() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-white px-[10px] pt-[75px] pb-[100px] lg:px-[100px] lg:pt-[150px]">
      {/* Dot-sphere brand mark + soft radial wash — lives in the left gutter
          so it never overlaps the headline. The sphere's right edge is
          anchored to the content container's left edge via calc(50% - 1065px)
          (550 container_half + 500 sphere_w + 15 gap = 1065), with a min()
          clamp so it caps the visible portion at very wide viewports and
          hides itself when the gutter is too narrow.
          Hidden on mobile because there is no gutter to live in. */}
      {/* Dot-sphere brand mark — large dramatic backdrop. Anchored so its
          right edge sits ≈100px INTO the headline column (matches the
          requested visual scale). Opacity 0.45 keeps the headline readable
          on top while still letting the sphere read as a present backdrop.
            550 (container_half) - 100 (overlap_into_text) + 600 (sphere_w) = 1050
          min() clamp prevents the sphere from creeping further inward at
          very wide viewports. Hidden on mobile (no gutter to live in). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-0 hidden h-[680px] w-[760px] -translate-y-1/2 lg:block"
        style={{
          left: "min(-260px, calc(50% - 1180px))",
          background:
            "radial-gradient(circle at 70% 50%, rgba(20,61,52,0.07), transparent 65%)",
        }}
      />
      <LogoSphere
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-0 hidden h-[600px] w-[600px] -translate-y-1/2 opacity-80 lg:block"
        style={{
          left: "min(-200px, calc(50% - 1050px))",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col lg:flex-row">
        <div className="lg:w-[605px]">
          <h3 className="text-left font-sans text-[52px] font-light leading-[62.4px] tracking-[-2px] text-[#124336] mb-[30px]">
            We connect European companies with highly qualified and culturally
            compatible candidates.
          </h3>
          <a
            href="/expertise/"
            className="inline-block rounded-[20px] border-none bg-[#124336] px-[30px] py-[15px] font-sans text-[13px] font-bold uppercase leading-none tracking-[1px] text-white transition-transform duration-300 hover:scale-110"
          >
            Learn more
          </a>
        </div>
        <div className="mt-[28px] lg:mt-0 lg:w-[495px]">
          {QUESTIONS.map((question, index) => {
            const isLast = index === QUESTIONS.length - 1;
            return (
              <h3
                key={question}
                className={`font-[family-name:var(--font-plus-jakarta-sans)] text-[20px] leading-[26px] text-[#124336] ${
                  isLast ? "font-bold mb-[8px]" : "font-normal mb-[5px]"
                } ${index === 0 ? "" : "mt-[28px]"}`}
              >
                {question}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
}
