"use client";

import { useState } from "react";
import Image from "next/image";
import { EnvelopeIcon, LinkedinIcon } from "@/components/icons";

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const labelClass =
  "block text-[12px] font-medium uppercase tracking-[1px] text-[#124336] mb-[6px]";

const inputClass =
  "w-full bg-[#f5f5f5] border-0 rounded-[3px] px-[14px] py-[12px] font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] placeholder:text-[#124336]/60 focus:outline-none focus:ring-2 focus:ring-[#3bdbb1]";

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks! We will be in touch.");
    setForm(initialState);
  };

  return (
    <section
      id="more"
      className="w-full bg-white py-[100px] px-[30px]"
    >
      <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-[60px]">
        {/* Left column: contact form (~60%) */}
        <div className="w-full lg:basis-3/5">
          <h3
            className="font-sans text-[36px] xl:text-[44px] leading-[1.15] text-[#124336] tracking-[-1px] mb-[30px]"
          >
            <span className="font-bold">Contact us</span>{" "}
            <span className="font-light">
              &amp; let&apos;s discuss your needs today
            </span>
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]"
          >
            <div className="sm:col-span-1">
              <label htmlFor="firstName" className={labelClass}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="lastName" className={labelClass}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className={labelClass}>
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Your Comments, Questions or Messages
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-[10px] bg-[#3bdbb1] text-white px-[30px] py-[15px] rounded-[20px] font-sans text-[13px] font-bold uppercase tracking-[1px] mt-[24px] hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right column: contact info card (~40%) */}
        <aside className="w-full lg:basis-2/5">
          <Image
            src="/images/logo-full.png"
            alt="OERTZENGroup"
            width={240}
            height={67}
            className="mb-[24px]"
          />

          <h5
            className="font-sans text-[12px] font-bold uppercase text-[#124336] mb-[24px]"
            style={{ letterSpacing: "8px" }}
          >
            Search · Select · Connect
          </h5>

          <ul className="space-y-[16px] list-none p-0 m-0">
            <li>
              <a
                href="https://goo.gl/maps/T3GSAhiPkP1ZeEZM8"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] hover:underline not-italic block leading-[1.5]"
              >
                <span aria-hidden="true" className="inline-block mr-[8px]">
                  &#9679;
                </span>
                1 Concourse Pkwy Suite 800
                <br />
                <span className="inline-block ml-[18px]">
                  Atlanta, GA 30328
                </span>
              </a>
            </li>

            <li>
              <a
                href="tel:+14044800033"
                className="font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] hover:underline block"
              >
                <span aria-hidden="true" className="inline-block mr-[8px]">
                  &#9742;
                </span>
                404-480-0033
              </a>
            </li>

            <li>
              <a
                href="https://oertzengroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] hover:underline block"
              >
                <span aria-hidden="true" className="inline-block mr-[8px]">
                  &#9783;
                </span>
                https://oertzengroup.com
              </a>
            </li>

            <li>
              <a
                href="mailto:info@oertzengroup.com?subject=Message%20from%20OERTZENGroup%20Website"
                className="font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] hover:underline block"
              >
                <EnvelopeIcon className="inline h-[16px] w-[16px] mr-[8px]" />
                info@oertzengroup.com
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/oertzen-group"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-plus-jakarta-sans)] text-[14px] text-[#124336] hover:underline block"
              >
                <LinkedinIcon className="inline h-[16px] w-[16px] mr-[8px]" />
                Connect on LinkedIn
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
