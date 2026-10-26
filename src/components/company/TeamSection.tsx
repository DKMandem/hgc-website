import { TeamGrid } from "./TeamGrid";

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
      </div>

      <TeamGrid />
    </section>
  );
}
