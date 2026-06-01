"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const imgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      className="w-full bg-white py-[60px] px-[30px]"
    >
      <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-[60px]">
        {/* Left column: contact form (~60%) */}
        <div className="w-full lg:basis-3/5">
          <h3
            className="font-sans text-[36px] xl:text-[44px] leading-[1.15] text-[#124336] tracking-[-1px] mb-[20px]"
          >
            <span className="font-bold">Contact Us</span>
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
                className="inline-flex items-center gap-[10px] bg-[#124336] text-white px-[30px] py-[15px] rounded-[20px] font-sans text-[13px] font-bold uppercase tracking-[1px] mt-[24px] hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right column: dark green panel with office photo popup (~40%) */}
        <aside
          className="relative w-full overflow-hidden rounded-[12px] lg:basis-2/5"
          style={{
            background:
              "linear-gradient(125deg, #237651 0%, #134a37 45%, #07271c 100%)",
            minHeight: "420px",
          }}
        >
          <div
            ref={imgRef}
            className="relative h-full w-full"
            style={{
              minHeight: "420px",
              transformOrigin: "center center",
              transition:
                "transform 900ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 700ms ease-out",
              transform: visible ? "scale(1)" : "scale(0.6)",
              opacity: visible ? 1 : 0,
            }}
          >
            <Image
              src="/images/office-building.jpg"
              alt="Hansen Global Consult office"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
