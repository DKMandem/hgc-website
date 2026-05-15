interface BlogPost {
  title: string;
  href: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    title:
      "As the U.S. population ages, more employees are seeking caregiver benefits at work",
    href: "/as-the-u-s-population-ages/",
    date: "February 20, 2026",
  },
  {
    title:
      "Companies Are Replacing CEOs in Record Numbers and They’re Getting Younger",
    href: "/companies-are-replacing-ceos/",
    date: "February 17, 2026",
  },
  {
    title: "U.S. manufacturing expands at fastest pace since 2022",
    href: "/u-s-manufacturing-expands-at-fastest-pace-since-2022/",
    date: "February 6, 2026",
  },
];

export function BlogSection() {
  return (
    <section
      className="relative bg-[url(/images/blog-parallax.jpg)] bg-cover bg-center bg-no-repeat bg-scroll px-[30px] py-[50px] md:px-[30px] md:py-[90px] xl:bg-fixed xl:px-0 xl:py-[150px]"
    >
      <div
        className="absolute inset-0 bg-[#ffffff] opacity-70"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1100px] text-left">
        <h5 className="mb-[16px] font-sans text-[12px] font-bold uppercase tracking-[12px] text-[#124336]">
          OertzenGroup Resources
        </h5>
        <h3 className="mb-[40px] font-sans text-[36px] font-bold leading-[1.1] tracking-[-1px] text-[#124336] xl:text-[54px] xl:leading-[54px]">
          Latest from OERTZENGroup
        </h3>
        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[35px] md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="flex min-h-[230px] flex-col justify-between rounded-[3px] bg-[#90cc57] p-[30px] shadow-[rgba(0,0,0,0.15)_0_0_10px_0] transition-all duration-300 ease-in-out hover:bg-[#7cb648] hover:shadow-[rgba(0,0,0,0.25)_0_0_14px_0]"
            >
              <div>
                <h3 className="mb-[16px] font-sans text-[20px] font-semibold leading-[24px] text-white">
                  <a href={post.href}>{post.title}</a>
                </h3>
                <p className="mt-[8px] font-sans text-[12px] font-normal text-white">
                  {post.date}
                </p>
              </div>
              <a
                href={post.href}
                className="mt-[16px] inline-block font-sans text-[12px] font-bold text-[#00496a] no-underline"
              >
                Read More »
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
