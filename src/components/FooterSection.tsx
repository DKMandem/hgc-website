import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

import { EnvelopeIcon, LinkedinIcon, PhoneIcon } from "@/components/icons";

const quickAccessLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company/" },
  { label: "Expertise", href: "/expertise/" },
  { label: "Connect", href: "/connect/" },
];

const contactLinks: ReadonlyArray<{
  label: string;
  href: string;
  external?: boolean;
}> = [
  { label: "+1 (512) 815-3552", href: "tel:+15128153552" },
  {
    label: "info@hansenglobalconsult.com",
    href: "mailto:info@hansenglobalconsult.com?subject=Message%20from%20Hansen%20Global%20Consult%20Website",
  },
  {
    label: "801 Barton Springs\nAustin, TX 78704",
    href: "https://www.google.com/maps/search/?api=1&query=801+Barton+Springs+Austin+TX+78704",
    external: true,
  },
];

const socialLinks: ReadonlyArray<{
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hansen-global-consult",
    Icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:info@hansenglobalconsult.com?subject=Message%20from%20Hansen%20Global%20Consult%20Website",
    Icon: EnvelopeIcon,
  },
  {
    label: "Phone",
    href: "tel:+15128153552",
    Icon: PhoneIcon,
  },
];

const headingClass =
  "mb-[16px] font-sans text-[18px] font-bold text-[#3bdbb1]";

const linkClass =
  "font-sans text-[14px] leading-[28px] text-white/[0.82] no-underline whitespace-pre-line transition-colors duration-200 ease-[ease] hover:text-[#3bdbb1]";

export function FooterSection() {
  return (
    <footer
      className="px-[30px] py-[34px] shadow-[rgba(99,115,129,0.05)_0_21px_48px_0] lg:px-0 lg:py-[30px]"
      style={{
        background:
          "linear-gradient(125deg, #07271c 0%, #134a37 55%, #237651 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:items-start lg:gap-[40px]">
        {/* Brand column */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="mb-[16px] flex items-center gap-[10px]">
            <Image
              src="/images/hgc-logo-lightest-transparent.png"
              alt=""
              width={56}
              height={56}
              className="h-[56px] w-[56px] shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-sans text-[22px] font-bold leading-none tracking-tight text-white">
                Hansen Global Consult
              </span>
              <span className="mt-[6px] font-sans text-[12px] font-light tracking-[1px] text-white/70">
                Great people build great companies
              </span>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <nav aria-labelledby="footer-quick-access">
          <h2 id="footer-quick-access" className={headingClass}>
            Quick Access
          </h2>
          <ul className="space-y-[11px]">
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
        <div>
          <h2 className={headingClass}>Contact Us</h2>
          <ul className="space-y-[11px]">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  style={
                    link.label.includes("\n")
                      ? { lineHeight: "23px" }
                      : undefined
                  }
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
        <div>
          <h2 className={headingClass}>Get Connected</h2>
          <div className="flex flex-row items-center gap-[14px]">
            {socialLinks.map(({ label, href, Icon }) => {
              const isLocal =
                href.startsWith("mailto:") || href.startsWith("tel:");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/60 transition-colors duration-200 ease-[ease] hover:text-[#3bdbb1]"
                  {...(isLocal
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

      <div className="mx-auto mt-[30px] max-w-[1140px] border-t border-white/10 pt-[20px]">
        <p className="pl-[11px] font-sans text-[12px] font-medium text-white/70">
          Copyright &copy; 2026 Hansen Global Consult.
        </p>
      </div>
    </footer>
  );
}
