export function ReadyToTalkSection() {
  return (
    <section
      className="px-[30px] py-[48px] lg:px-[50px] lg:py-[72px]"
      style={{
        background:
          "linear-gradient(125deg, #237651 0%, #134a37 45%, #07271c 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center">
        <h3 className="m-0 text-center font-sans text-[18px] font-light tracking-[1px] text-white/80 lg:text-[22px]">
          Ready to take the next step?
        </h3>
        <p className="mt-[20px] text-center font-sans text-[56px] font-extralight leading-[61.6px] tracking-[-2px] text-white lg:text-[88px] lg:leading-[92px]">
          Change starts with a{" "}
          <span style={{ color: "#3bdbb1" }}>conversation</span>.
        </p>
      </div>
    </section>
  );
}
