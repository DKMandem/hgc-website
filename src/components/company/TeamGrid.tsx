import { ArrowRight } from "lucide-react";
import { team, type TeamMember } from "./teamData";

const GREEN = "#124336"; // primary brand green (text)
const ACCENT = "#127d68"; // teal-green for outline buttons / links

const GROUPS: { label: string; match: (m: TeamMember) => boolean }[] = [
  { label: "Our Team", match: (m) => !m.advisor },
  { label: "Our Advisors", match: (m) => !!m.advisor },
];

export function TeamGrid() {
  return (
    <div className="w-full">
      {/* ── Profile cards: "Our Team", then "Our Advisors" ────────── */}
      {GROUPS.map((group) => (
        <div
          key={group.label}
          className="mx-auto mb-[80px] max-w-[1100px] px-[30px] last:mb-0"
        >
          <h4
            className="mb-8"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "-0.3px",
              color: GREEN,
            }}
          >
            {group.label}
          </h4>
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.filter(group.match).map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article>
      {/* Photo */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{ backgroundColor: member.fill ?? "#e0e0e0" }}
      >
        <div
          role="img"
          aria-label={member.name}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${member.img})`,
            backgroundSize: "cover",
            backgroundPosition: member.objectPosition ?? "50% 30%",
            filter:
              [
                member.brightness ? `brightness(${member.brightness})` : null,
                member.saturate ? `saturate(${member.saturate})` : null,
              ]
                .filter(Boolean)
                .join(" ") || undefined,
            transform:
              [
                member.zoom ? `scale(${member.zoom})` : null,
                member.shiftY ? `translateY(${member.shiftY}%)` : null,
              ]
                .filter(Boolean)
                .join(" ") || undefined,
            transformOrigin: member.objectPosition ?? "50% 30%",
          }}
        />
      </div>

      {/* Name + title */}
      <p
        className="mt-4 font-bold"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "17px",
          lineHeight: 1.2,
          color: GREEN,
        }}
      >
        {member.name}
      </p>
      <p
        className="mt-2 uppercase"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "1px",
          lineHeight: 1.5,
          color: GREEN,
          opacity: 0.75,
        }}
      >
        {member.title}
      </p>

      {/* Bio — supports multiple paragraphs separated by a blank line */}
      <div className="mt-5">
        {member.bio.split("\n\n").map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "15px",
              lineHeight: "25px",
              fontWeight: 300,
              color: "#2a4a40",
              marginTop: i === 0 ? 0 : "14px",
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* LinkedIn button */}
      {member.linkedin && (
        <div className="mt-7">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border transition-colors hover:bg-[#127d68] hover:text-white"
            style={{
              borderColor: ACCENT,
              color: ACCENT,
              fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 16px",
            }}
          >
            Connect on LinkedIn
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* Affiliation logo */}
      {member.logo &&
        (member.logoLink ? (
          <a
            href={member.logoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.logo}
              alt={`${member.name} affiliation logo`}
              style={{ height: `${member.logoHeight ?? 38}px`, width: "auto" }}
            />
          </a>
        ) : (
          <div className="mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.logo}
              alt={`${member.name} affiliation logo`}
              style={{ height: `${member.logoHeight ?? 38}px`, width: "auto" }}
            />
          </div>
        ))}
    </article>
  );
}
