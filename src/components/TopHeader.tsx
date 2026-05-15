"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HamburgerIcon, CloseIcon } from "@/components/icons";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Company", href: "/company/" },
  {
    label: "Current Openings",
    href: "https://careers.topechelon.com/portals/91219bdb-c277-45cf-945c-1921eb2cfc57/jobs",
    external: true,
  },
  { label: "Expertise", href: "/expertise/" },
];

export function TopHeader() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the off-canvas panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className="static w-full bg-[#DEDEDE]"
      style={{ height: "70px", padding: 0 }}
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1200px]">
        {/* Left half — dark block matching the hero box (continuous column) */}
        <div className="flex w-1/2 items-center bg-[#124336] pl-[10px] pr-[20px]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Hansen Global Consult — Home"
          >
            <span className="font-sans text-[28px] font-bold leading-none tracking-tight text-white">
              Hansen Global Consult
            </span>
          </Link>
        </div>

        {/* Right half — lime green block with nav */}
        <div className="flex w-1/2 items-center justify-end bg-[#DEDEDE] pr-[15px] md:pr-[20px]">
          {/* Desktop nav */}
          <nav className="hidden items-center md:flex">
            {NAV_ITEMS.map((item) => {
              const classes = cn(
                "font-sans text-[13px] font-bold uppercase tracking-[1px] px-[20px] py-[13px] transition-colors duration-200 ease-[ease]",
                item.active
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
            className="flex items-center justify-center text-[#042e24] md:hidden"
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
            className="flex items-center justify-center text-white"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => {
            const classes =
              "font-sans text-[16px] font-bold uppercase tracking-[1px] text-white px-[20px] py-[16px]";
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
