type Testimonial = {
  quote: string;
  author: string;
  meta: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Camilla is an exceptionally thorough and conscientious recruiter. She takes the time to deeply understand a company's strategic direction and how a role can create both short- and long-term impact. Her structured methodology consistently identifies not just strong candidates, but outstanding talent. Her professionalism and insight left a lasting impression, and I recommend her without hesitation.",
    author: "General Manager, IT Software Company",
    meta: "(700 Employees)",
  },
  {
    quote:
      "It has been a pleasure working with you…both the quality of the candidates and the accompanying materials were of a very high standard. I also received very positive feedback from the candidates…I particularly appreciated your approach to the entire process. At no point did we feel pressured to make a decision unless it was the right one. You consistently provided valuable guidance throughout the evaluation of candidates and demonstrated a strong understanding of what constitutes the right profile in alignment with our culture and values. I see your approach to executive search as highly attractive for companies looking to expand in the U.S. market.",
    author: "CEO, MedTech Company",
    meta: "(650 employees)",
  },
  {
    quote:
      "Camilla hjalp os med rekruttering for en kritisk lederstilling for vores datterselskab i USA med stor succes…Jeg var dermed i stand til at ansætte en virkelig stærk kandidat, som driver min virksomhed fremad over alle forventninger…jeg (havde) også nogle selskabs tekniske spørgsmål, hvortil Camilla henviste mig til Gert…jeg var imponeret af hans grundige rådgivning. Det var en fornøjelse at arbejde sammen med både Camilla og Gert, og jeg kan anbefale dem til andre virksomheder.",
    author: "CEO, Health Care Company",
    meta: "(200 Employees)",
  },
];

function QuoteMark() {
  return (
    <svg
      width="50"
      height="46"
      viewBox="0 0 448 512"
      fill="#3bdbb1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="-mt-[23px] mb-[20px]"
    >
      <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136z" />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#f1f3f1] px-[24px] pb-[80px] pt-[32px] lg:px-[50px] lg:pb-[120px] lg:pt-[48px]">
      <div className="mx-auto max-w-[1300px]">
        <h2
          className="text-center font-[family-name:var(--font-montserrat)] text-[40px] font-bold text-[#124336] xl:text-[48px]"
          style={{ letterSpacing: "-2px" }}
        >
          Testimonials
        </h2>

        <div className="mt-[56px] grid grid-cols-1 gap-[28px] md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col items-center bg-[#dde4df] px-[32px] pb-[44px] pt-0"
            >
              <QuoteMark />

              <blockquote className="text-justify font-[family-name:var(--font-montserrat)] text-[18px] font-normal leading-[28px] text-[#124336]">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-[28px] text-center font-[family-name:var(--font-montserrat)] text-[16px] font-bold leading-[24px] text-[#124336]">
                – {testimonial.author}
                <span className="block">{testimonial.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
