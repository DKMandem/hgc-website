import Link from "next/link";
import { CheckCircleIcon } from "@/components/icons";

type Value = {
  title: string;
  body: string;
};

const values: Value[] = [
  {
    title: "Ethical",
    body: "Do the right thing when no one else is looking.",
  },
  {
    title: "Proactive",
    body: "Take control and make things happen rather than adjusting to a situation.",
  },
  {
    title: "Innovative",
    body: "Constantly challenge the status quo, whether it be technology, process or method.",
  },
  {
    title: "Curious",
    body: "Display a sincere interest in our client's industry and products.",
  },
  {
    title: "Customer centric",
    body: "Look from the outside in and not the other way around.",
  },
  {
    title: "Communicative",
    body: "Internal and external drive to communicate better.",
  },
];

export function EPICCCSection() {
  return (
    <section className="w-full bg-white px-[30px] py-[100px]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-[40px] lg:flex-row">
        {/* Left column ~40% */}
        <div className="w-full lg:w-2/5">
          <h3 className="m-0 font-sans text-[36px] font-bold leading-[1.15] tracking-[-1px] text-[#124336] xl:text-[44px]">
            At OERTZENGroup we believe in being EPICCC.
          </h3>
          <Link
            href="/connect"
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
            Let&apos;s connect
          </Link>
        </div>

        {/* Right column ~60% */}
        <div className="w-full lg:w-3/5">
          <ul className="m-0 list-none space-y-[24px] p-0">
            {values.map((v) => (
              <li key={v.title} className="flex items-start">
                <CheckCircleIcon className="mr-[14px] mt-[2px] h-[24px] w-[24px] shrink-0 text-[#90cc57]" />
                <div>
                  <h3
                    className="font-sans font-bold text-[#124336]"
                    style={{ fontSize: "20px", margin: 0 }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[#124336]"
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                      fontSize: "16px",
                      fontWeight: 300,
                      lineHeight: "1.5",
                      marginTop: "2px",
                      marginBottom: 0,
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
