export function ExpertiseMission() {
  return (
    <section className="w-full bg-[#124336] px-[50px] py-[70px] lg:px-[50px] lg:pt-[70px] lg:pb-[50px]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-[30px] lg:flex-row">
        {/* Left ~33% */}
        <div className="w-full lg:w-1/3">
          <h3
            className="font-sans font-extralight text-white text-[40px] xl:text-[56px]"
            style={{
              lineHeight: "1.1",
              letterSpacing: "-2px",
              margin: 0,
            }}
          >
            Our
            <br />
            <span className="font-bold">Mission</span>
            <br />
            Statement
          </h3>
        </div>

        {/* Right ~66% */}
        <div className="w-full lg:w-2/3">
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "#fff",
              lineHeight: "25.2px",
              marginTop: 0,
              marginBottom: "24px",
            }}
          >
            Our mission is to raise the standards on best practices by bringing
            a more efficient – yet more approachable and collaborative – way to
            interact and service our clients and candidates. During the
            recruitment process, we would like to think of ourselves as an
            extension of your talent acquisition department.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "#fff",
              lineHeight: "25.2px",
              margin: 0,
            }}
          >
            We are highly experienced in connecting the European business
            community with seasoned, highly qualified, and culturally
            compatible candidates in North America. Listening to our
            clients&apos; and candidates&apos; needs is paramount to a
            successful placement.
          </p>
        </div>
      </div>
    </section>
  );
}
