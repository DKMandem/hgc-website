import Image from "next/image";
import { LinkedinIcon } from "@/components/icons";

type TeamMember = {
  name: string;
  title: string;
  img: string;
  brightness?: number;
  objectPosition?: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Camilla Daniels Hansen",
    title: "Managing Partner",
    img: "/images/team/CamillaDanielsHansen.avif",
    objectPosition: "50% 18%",
    linkedin: "https://www.linkedin.com/in/camilladaniels/",
  },
  {
    name: "Anna Berg Hansen",
    title: "Managing Partner",
    img: "/images/team/AnnaBergHansen.avif",
    brightness: 1.1,
    linkedin: "https://www.linkedin.com/in/annaberghansen/",
  },
  {
    name: "Rikke Malmberg",
    title: "Executive Search Consultant",
    img: "/images/team/rikkemalmbergbetterbackground.png",
    linkedin: "https://www.linkedin.com/in/rikkechristensen/",
  },
  {
    name: "Julia Daniels",
    title: "Project Manager",
    img: "/images/team/Juliadaniels.JPG",
    linkedin: "https://www.linkedin.com/in/julia-daniels-17375b198",
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
                style={{
                  ...(member.brightness
                    ? { filter: `brightness(${member.brightness})` }
                    : {}),
                  ...(member.objectPosition
                    ? { objectPosition: member.objectPosition }
                    : {}),
                }}
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
              {member.linkedin && (
                <div className="mt-[10px] flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center justify-center text-[#0A66C2] transition-opacity duration-200 hover:opacity-80"
                  >
                    <LinkedinIcon className="h-[26px] w-[26px]" />
                  </a>
                </div>
              )}
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
