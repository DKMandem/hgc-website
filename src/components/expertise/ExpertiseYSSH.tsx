export function ExpertiseYSSH({ reverse = false }: { reverse?: boolean }) {
  return (
    <section
      className={`flex w-full flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Left: photo */}
      <div
        aria-hidden="true"
        className="min-h-[280px] w-full bg-cover bg-center lg:min-h-[500px] lg:w-1/2"
        style={{ backgroundImage: "url(/images/howwehelp-left.jpg)" }}
      />

      {/* Right: copy */}
      <div className="flex w-full items-center bg-white px-[30px] py-[50px] lg:w-1/2 lg:px-[80px] lg:py-[80px]">
        <div className="w-full">
          <h3
            className="font-sans font-bold"
            style={{
              fontSize: "clamp(30px, 6vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              color: "#124336",
              marginBottom: "12px",
            }}
          >
            Executive Search / Professional Recruitment
          </h3>

          <p
            className="font-sans"
            style={{
              fontSize: "22px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "-0.5px",
              color: "#124336",
              marginBottom: "16px",
            }}
          >
            Secure leaders who shape your future.
          </p>

          <hr className="my-[24px] w-full max-w-[468px] border-0 border-t-[1.77px] border-[#90cc57]" />

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Leadership appointments are among the most important decisions a
            company makes. We bring the structure, market knowledge, and
            discretion those decisions require.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Our global executive search process is built to identify the
            strongest available talent &mdash; leaders who will not only meet
            your requirements but raise the level of your company.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            We hold to every agreed milestone and timeline, providing
            continuous support through to offer acceptance and beyond.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Our clients receive consistent, senior-level attention throughout
            the entire search &mdash; with full transparency at every stage.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Our process includes a thorough analysis of your needs, deep
            knowledge of the relevant talent market, a targeted and discreet
            candidate strategy, rigorous assessment and benchmarking, and
            personalized onboarding and integration support &mdash; delivered
            globally.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            <strong style={{ fontWeight: 700 }}>Executive Search</strong>:
            Should a placed candidate depart within the first twelve months, we
            conduct a full replacement search at no additional placement fee.
            This is our commitment to every client engagement.
          </p>

          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "25.2px",
              color: "#124336",
              marginBottom: "0",
              textAlign: "justify",
            }}
          >
            <strong style={{ fontWeight: 700 }}>Professional Recruitment</strong>:
            Should a placed candidate depart within the 3-6 months, we conduct a
            full replacement search at no additional placement fee. This is our
            commitment to every client engagement.
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
