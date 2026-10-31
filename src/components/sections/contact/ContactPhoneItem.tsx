import React from "react";
import Arrow from "@/components/ui/Arrow";
import { PhoneContact } from "@/data/landingData";

interface ContactPhoneItemProps {
  phone: PhoneContact;
}

export default function ContactPhoneItem({ phone }: ContactPhoneItemProps) {
  return (
    <a
      href={phone.tel}
      className="group flex items-center justify-between border-b border-[#e7e2d7] py-4 text-sm font-semibold text-[#192e4b] transition-colors hover:text-[#a8322b] focus:outline-none focus:text-[#a8322b]"
    >
      <span>{phone.formatted}</span>
      <Arrow diagonal />
    </a>
  );
}
