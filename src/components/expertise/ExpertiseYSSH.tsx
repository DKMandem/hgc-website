export function ExpertiseYSSH() {
  return (
    <section className="flex w-full flex-col lg:flex-row">
      {/* Left: photo */}
      <div
        aria-hidden="true"
        className="min-h-[280px] w-full bg-cover bg-center lg:min-h-[500px] lg:w-1/2"
        style={{ backgroundImage: "url(/images/howwehelp-left.jpg)" }}
      />

      {/* Right: copy */}
      <div className="flex w-full items-center bg-white px-[30px] py-[50px] lg:w-1/2 lg:px-[80px] lg:py-[80px]">
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
            className="font-sans font-bold"
            style={{
              fontSize: "50px",
              lineHeight: "55px",
              letterSpacing: "-1px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            Your Search
            <br />
            Stops Here
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
            Our goal at Oertzen Group is to provide your company with a
            holistic approach to your recruiting needs. We make the complex
            process of recruiting a seamless, thoughtful, and enjoyable one. We
            raise your brand awareness and desirability by telling your unique
            story and why highly qualified candidates should want to work for
            you.
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
            We understand that filling critical positions with highly suitable
            candidates in a timely fashion is paramount to your company
            achieving your unique goals. Our priority is to become an
            extension of your recruiting department. Our search continues so
            that yours can stop. Set an appointment and let&apos;s talk.
          </p>

          <a
            href="mailto:info@oertzengroup.com?subject=Appointment%20Request%20via%20OERTZENGroup%20Website"
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
            Set up an appointment
          </a>
        </div>
      </div>
    </section>
  );
}
