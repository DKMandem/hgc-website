export function MissionStrip() {
  return (
    <section className="w-full bg-[#f5f5f5] px-[30px] py-[80px]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-[40px] lg:flex-row">
        {/* Left column ~33% */}
        <div className="w-full lg:w-1/3">
          <h3
            className="m-0 font-sans text-[40px] font-light leading-[1.1] tracking-[-2px] text-[#124336] xl:text-[52px]"
          >
            Our
            <br />
            <span className="font-bold">Mission</span>
            <br />
            Statement
          </h3>
        </div>

        {/* Right column ~66% */}
        <div className="w-full lg:w-2/3">
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "20px",
              fontWeight: 300,
              color: "#124336",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            We connect the European business community in North America with
            highly qualified and culturally compatible candidates.
          </p>
        </div>
      </div>
    </section>
  );
}
