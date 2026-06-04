"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HamburgerIcon, CloseIcon } from "@/components/icons";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Expertise", href: "/expertise" },
  { label: "Connect", href: "/connect" },
];

export function TopHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the off-canvas panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Once the hero has scrolled past the sticky header, switch the header's
  // left block from dark green to the same gray as the nav block. If a page
  // has no hero, the threshold stays out of reach so the header never swaps.
  useEffect(() => {
    const HEADER_HEIGHT = 70;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    let threshold = Number.POSITIVE_INFINITY;
    const computeThreshold = () => {
      threshold = hero
        ? hero.offsetTop + hero.offsetHeight - HEADER_HEIGHT
        : Number.POSITIVE_INFINITY;
    };
    const onScroll = () => setScrolled(window.scrollY >= threshold);
    const onResize = () => {
      computeThreshold();
      onScroll();
    };
    computeThreshold();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#DEDEDE]"
      style={{ height: "70px", padding: 0 }}
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1200px]">
        {/* Left half — dark block matching the hero box (continuous column).
            Once scrolled past the hero it fades to the same gray as the nav. */}
        <div
          className={cn(
            "flex w-auto flex-1 items-center pl-[10px] pr-[20px] transition-colors duration-300 ease-[ease] md:w-1/2 md:flex-none",
            scrolled ? "bg-[#DEDEDE]" : "bg-[#124336]",
          )}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Hansen Global Consult — Home"
          >
            <span className="relative -ml-[8px] mr-[2px] h-[56px] w-[56px] shrink-0">
              <Image
                src="/images/hgc-logo-lightest-transparent.png"
                alt=""
                width={56}
                height={56}
                priority
                className={cn(
                  "absolute inset-0 h-[56px] w-[56px] object-contain transition-opacity duration-300 ease-[ease]",
                  scrolled ? "opacity-0" : "opacity-100",
                )}
              />
              <Image
                src="/images/CircleLogo.png"
                alt=""
                width={56}
                height={56}
                priority
                className={cn(
                  "absolute inset-0 h-[56px] w-[56px] object-contain transition-opacity duration-300 ease-[ease]",
                  scrolled ? "opacity-100" : "opacity-0",
                )}
              />
            </span>
            <span
              className={cn(
                "truncate font-sans text-[17px] font-bold leading-none tracking-tight transition-colors duration-300 ease-[ease] sm:text-[22px] md:text-[28px]",
                scrolled ? "text-[#124336]" : "text-white",
              )}
            >
              Hansen Global Consult
            </span>
          </Link>
        </div>

        {/* Right half — lime green block with nav */}
        <div
          className={cn(
            "flex items-center justify-end pr-[15px] transition-colors duration-300 ease-[ease] md:w-1/2 md:bg-[#DEDEDE] md:pr-[20px]",
            scrolled ? "bg-[#DEDEDE]" : "bg-[#124336]",
          )}
        >
          {/* Desktop nav */}
          <nav className="hidden items-center md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href) ?? false;
              const classes = cn(
                "font-sans text-[13px] font-bold uppercase tracking-[1px] px-[20px] py-[13px] transition-colors duration-200 ease-[ease]",
                isActive
                  ? "text-[#042e24]"
                  : "text-[#042e24]/70 hover:text-[#042e24]",
              );
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={classes}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              "flex items-center justify-center transition-colors duration-300 ease-[ease] md:hidden",
              scrolled ? "text-[#042e24]" : "text-[#DEDEDE]",
            )}
          >
            <HamburgerIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-[ease] md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Off-canvas panel */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-[280px] max-w-[80vw] flex-col bg-[#DEDEDE] transition-transform duration-300 ease-[ease] md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-end px-[15px] py-[15px]">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center text-[#124336]"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => {
            const classes =
              "font-sans text-[16px] font-bold uppercase tracking-[1px] text-[#124336] px-[20px] py-[16px]";
            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={classes}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </header>
  );
}
