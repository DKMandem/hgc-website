import Link from "next/link";

export function SSCSection() {
  return (
    <section className="flex w-full flex-col lg:flex-row">
      {/* Left: photo */}
      <div
        aria-hidden="true"
        className="min-h-[280px] w-full bg-cover bg-center lg:min-h-[500px] lg:w-1/2"
        style={{ backgroundImage: "url(/images/howwehelp-left.jpg)" }}
      />

      {/* Right: copy */}
      <div className="flex w-full items-center bg-white px-[30px] py-[60px] lg:w-1/2 lg:px-[80px] lg:py-[80px]">
        <div className="w-full">
          <h5
            className="font-sans uppercase"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "12px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            Executive Search · Professional Recruitment
          </h5>

          <h3
            className="font-sans"
            style={{
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: "55px",
              letterSpacing: "-1px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            Search. Select. Connect.
          </h3>

          <hr className="my-[24px] w-full max-w-[468px] border-0 border-t-[1.77px] border-[#90cc57]" />

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            OERTZENGroup is the answer to the industry&apos;s tendency to deliver
            inconsistent results, impersonal relationships and rigid pricing
            structure. Matthias Oertzen, the founder, felt the need to respond
            with an alternative that offers expertise in executive and
            professional recruitment with the flexibility to adapt to current
            and local markets.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "0",
            }}
          >
            The OERTZENGroup is able to provide a customized service offering,
            using resources intelligently to deliver results our clients
            require, in a simple and effective way. As our client, you will
            have a truly one-on-one experience that is catered to your needs.
            We will make finding the right match an effortless and effective
            process for you.
          </p>

          <Link
            href="/expertise"
            className="mt-[24px] inline-block font-sans uppercase transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: "#124336",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
