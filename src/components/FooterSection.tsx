import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

import {
  EnvelopeIcon,
  LinkedinIcon,
  MicrophoneIcon,
  YoutubeIcon,
} from "@/components/icons";

const quickAccessLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company/" },
  { label: "Expertise", href: "/expertise/" },
  { label: "Resources", href: "/resources/" },
  { label: "Connect", href: "/connect/" },
];

const contactLinks: ReadonlyArray<{
  label: string;
  href: string;
  external?: boolean;
}> = [
  {
    label: "1 Concourse Pkwy Suite 800 · Atlanta, GA 30328",
    href: "https://goo.gl/maps/T3GSAhiPkP1ZeEZM8",
    external: true,
  },
  { label: "404-480-0033", href: "tel:+14044800033" },
  {
    label: "https://oertzengroup.com",
    href: "https://oertzengroup.com/",
    external: true,
  },
  {
    label: "info@oertzengroup.com",
    href: "mailto:info@oertzengroup.com?subject=Message%20from%20OERTZENGroup%20Website",
  },
];

const socialLinks: ReadonlyArray<{
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  {
    label: "Westbound podcast",
    href: "https://westbound-podcast.castos.com/",
    Icon: MicrophoneIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@westboundpodcast",
    Icon: YoutubeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/oertzen-group",
    Icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:info@oertzengroup.com?subject=Message%20from%20OERTZENGroup%20Website",
    Icon: EnvelopeIcon,
  },
];

const headingClass =
  "mb-[16px] font-sans text-[18px] font-normal text-[#90cc57]";

const linkClass =
  "font-sans text-[14px] leading-[28px] text-white/[0.82] no-underline transition-colors duration-200 ease-[ease] hover:text-[#90cc57]";

export function FooterSection() {
  return (
    <footer className="bg-[#00496a] px-[30px] py-[50px] shadow-[rgba(99,115,129,0.05)_0_21px_48px_0] lg:px-0 lg:py-[80px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-[30px] md:grid-cols-2 lg:flex lg:flex-row lg:items-start">
        {/* Brand column */}
        <div className="md:col-span-2 lg:w-[30%] lg:shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="OERTZENGroup"
            width={280}
            height={79}
            className="mb-[16px] h-auto w-[280px]"
          />
          <p className="mb-[16px] font-sans text-[13px] font-light leading-[20px] text-white/[0.82]">
            An experienced, resourceful and approachable solution for your
            executive recruitment needs.
          </p>
          <p className="font-sans text-[11px] font-medium text-white/[0.87]">
            Copyright &copy; 2021-2026 OERTZENGroup. All rights reserved.
          </p>
        </div>

        {/* Quick Access */}
        <nav className="lg:flex-1" aria-labelledby="footer-quick-access">
          <h2 id="footer-quick-access" className={headingClass}>
            Quick Access
          </h2>
          <ul>
            {quickAccessLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Us */}
        <div className="lg:flex-1">
          <h2 className={headingClass}>Contact Us</h2>
          <ul>
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Connected */}
        <div className="lg:flex-1">
          <h2 className={headingClass}>Get Connected</h2>
          <p className="font-sans text-[14px] leading-[28px] text-white/[0.82]">
            Listen to the Westbound podcast
          </p>
          <div className="mt-[16px] flex flex-row items-center gap-[14px]">
            {socialLinks.map(({ label, href, Icon }) => {
              const isMail = href.startsWith("mailto:");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/60 transition-colors duration-200 ease-[ease] hover:text-[#90cc57]"
                  {...(isMail
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
