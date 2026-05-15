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
    <section className="relative overflow-hidden bg-white px-[10px] pt-[75px] pb-[100px] lg:px-[100px] lg:pt-[150px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/images/logo-reverse.png)",
          backgroundSize: "537px",
          backgroundPosition: "-25px 444px",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col lg:flex-row">
        <div className="lg:w-[605px]">
          <h3 className="text-left font-sans text-[52px] font-light leading-[62.4px] tracking-[-2px] text-[#00496a] mb-[30px]">
            We connect European companies with highly qualified and culturally
            compatible candidates.
          </h3>
          <a
            href="/expertise/"
            className="inline-block rounded-[20px] border-none bg-[#00496a] px-[30px] py-[15px] font-sans text-[13px] font-bold uppercase leading-none tracking-[1px] text-white transition-transform duration-300 hover:scale-110"
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
                className={`font-serif text-[20px] leading-[26px] text-[#00496a] ${
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
