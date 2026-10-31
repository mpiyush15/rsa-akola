import React from "react";
import Arrow from "@/components/ui/Arrow";
import { CONTACT_INFO } from "@/data/landingData";
import ContactPhoneItem from "./ContactPhoneItem";

export default function ContactCard() {
  return (
    <div className="border border-[#ded8ca] bg-white p-6 shadow-sm sm:p-9">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#496b58]">
        Speak With Our Team
      </p>
      <h3 className="mt-3 text-2xl font-bold text-[#192e4b]">
        Admissions Enquiry
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#626b6b]">
        Get in touch for course information and registration guidance.
      </p>

      {/* Phone list subdivision */}
      <div className="mt-7 space-y-1">
        {CONTACT_INFO.phones.map((phone) => (
          <ContactPhoneItem key={phone.number} phone={phone} />
        ))}
      </div>

      {/* Website Link */}
      <a
        href={CONTACT_INFO.websiteUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-7 inline-flex items-center gap-2.5 text-xs font-bold text-[#496b58] transition-colors hover:text-[#a8322b] focus:outline-none focus:underline"
      >
        <span>Visit Academy Website</span>
        <Arrow diagonal />
      </a>
    </div>
  );
}
