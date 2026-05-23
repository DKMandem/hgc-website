import Image from "next/image";

type TeamMember = {
  name: string;
  title: string;
  img: string;
};

const team: TeamMember[] = [
  {
    name: "Camilla Daniels Hansen",
    title: "Managing Partner",
    img: "/images/team/CamillaDanielsHansen.avif",
  },
  {
    name: "Anna Berg Hansen",
    title: "Managing Partner",
    img: "/images/team/AnnaBergHansen.avif",
  },
  {
    name: "Rikke Malmberg",
    title: "Executive Search Consultant",
    img: "/images/team/RikkeMalmberg.jpeg",
  },
  {
    name: "Julia Daniels",
    title: "Marketing Coordinator",
    img: "/images/team/Juliadaniels.JPG",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="w-full px-[30px] py-[100px]"
      style={{ backgroundColor: "rgba(0,73,106,0.03)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <h3 className="mb-[60px] text-center font-sans text-[40px] font-bold leading-[1.1] tracking-[-1px] text-[#124336] xl:text-[54px]">
          Meet the
          <br />
          Team
        </h3>

        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name}>
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                className="h-[320px] w-full rounded-[3px] object-cover"
              />
              <h3
                className="text-center font-sans font-bold text-[#124336]"
                style={{ fontSize: "18px", marginTop: "16px" }}
              >
                {member.name}
              </h3>
              <p
                className="text-center text-[#124336]"
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <h5
          className="text-center font-sans font-light text-[#124336]"
          style={{ fontSize: "20px", marginTop: "60px" }}
        >
          We are here for you
        </h5>
      </div>
    </section>
  );
}
