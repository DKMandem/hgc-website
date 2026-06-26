import { TeamAccordion } from "./TeamAccordion";

export function TeamSection() {
  return (
    <section
      id="team"
      className="w-full py-[100px]"
      style={{ backgroundColor: "rgba(0,73,106,0.03)" }}
    >
      <div className="mx-auto mb-[48px] max-w-[1100px] px-[30px]">
        <h3 className="text-center font-sans text-[40px] font-bold leading-[1.1] tracking-[-1px] text-[#124336] xl:text-[54px]">
          Meet the Team
        </h3>
        <p
          className="mx-auto mt-4 max-w-[480px] text-center text-[#124336]"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            opacity: 0.7,
          }}
        >
          Hover or tap a team member to highlight them and read their profile.
        </p>
      </div>

      <TeamAccordion />
    </section>
  );
}
