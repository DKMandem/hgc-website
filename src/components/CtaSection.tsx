export function CtaSection() {
  return (
    <section
      className="px-[30px] py-[50px] lg:px-[50px] lg:pt-[70px] lg:pb-[50px]"
      style={{
        background:
          "linear-gradient(125deg, #237651 0%, #134a37 45%, #07271c 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-[30px] lg:flex-row">
        <div className="w-full lg:w-[33%] lg:shrink-0">
          <h3 className="m-0 mb-0 text-left font-sans text-[40px] font-extralight leading-[44px] tracking-[-2px] text-white lg:text-[56px] lg:leading-[61.6px]">
            Your Search Stops Here
          </h3>
        </div>
        <div className="flex w-full flex-col gap-[24px] lg:w-[66%]">
          <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-[18px] font-light leading-[25.2px] text-white">
            Our goal at OERTZENGroup is to provide your company with a holistic
            approach to your recruiting needs. We make the complex process of
            recruiting a seamless, thoughtful, and enjoyable one. We raise your
            brand awareness and desirability by telling your unique story and
            why highly qualified candidates should want to work for you.
          </p>
          <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-[18px] font-light leading-[25.2px] text-white">
            We understand that filling critical positions with highly suitable
            candidates in a timely fashion is paramount to your company
            achieving your unique goals. Our priority is to become an extension
            of your recruiting department. Our search continues so that yours
            can stop.
          </p>
        </div>
      </div>
    </section>
  );
}
