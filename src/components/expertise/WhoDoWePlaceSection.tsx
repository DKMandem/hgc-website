import { CheckCircleIcon } from "@/components/icons";

const PLACEMENTS = [
  {
    title: "C-Level Executives",
    body: "CEO, President, COO, CFO, GM, Managing Director",
  },
  {
    title: "Senior and Mid-Level Management",
    body: "VP, Senior Director, Director, Manager",
  },
  {
    title: "Professional Level",
    body: "HR, Sales, Finance, Engineering, etc.",
  },
] as const;

export function WhoDoWePlaceSection() {
  return (
    <section className="w-full bg-white px-[30px] py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <h3
          className="font-sans font-bold text-[#124336] text-center text-[40px] xl:text-[44px]"
          style={{
            marginBottom: "50px",
            margin: 0,
          }}
        >
          Who do we place?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[50px]">
          {PLACEMENTS.map((card) => (
            <div
              key={card.title}
              className="rounded-[6px] border border-[rgba(18,67,54,0.1)] bg-white p-[30px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <CheckCircleIcon className="mx-auto h-[36px] w-[36px] text-[#90cc57] mb-[16px]" />
              <h4
                className="font-sans uppercase text-[#124336]"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  marginBottom: "10px",
                  margin: 0,
                }}
              >
                {card.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#124336",
                  lineHeight: "1.5",
                  marginTop: "10px",
                  marginBottom: "0",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
