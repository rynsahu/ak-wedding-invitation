'use client'
import { useState } from "react";
import Link from "next/link";
import EventCountdown from "../EventCountdown";

const EventVenue = () => {
  const WEDDING_DATE = '2024-03-11T23:30:00';
  const RECEPTION_DATE = '2024-03-13T23:30:00';

  const [eventDate, setEventDate] = useState<any>(WEDDING_DATE);

  const handleDateExpired = (expiredDate: any) => {
    if (expiredDate === new Date(WEDDING_DATE).getTime()) setEventDate(RECEPTION_DATE);
    else if (expiredDate === new Date(RECEPTION_DATE).getTime()) setEventDate(new Date().getTime());
  }

  return (
    <div className="flex flex-col gap-8 z-10 pb-[95px] mt-[-20px]">
      <span className="font-serif-display mb-1 text-lg">{"Time & Venue"}</span>
      {/* --------- */}
      <EventCountdown
        eventDate={eventDate}
        onDateExpired={handleDateExpired}
      />
      {/* --- Wedding Venue --- */}
      {new Date().getTime() <= new Date(WEDDING_DATE).getTime() && (
        <div className="flex flex-col gap-3 bg-[#FBF8F2] mx-5 rounded-lg p-3">
          <span className="font-serif-display text-lg">Wedding</span>
          <div className="flex flex-col gap-1 text-[#1E2742]">
            <span>Mon, 11th Mar 2024 | At 07:00 PM</span>
            <span className="text-sm">Mohini Green Garden,<br/>Sanigawan, Kanpur, Uttar Pradesh 208021</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display mt-2 text-[#9A2143] border border-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center hover:text-white hover:bg-[#9A2143]"
            href="https://maps.app.goo.gl/DzCdSiSbAkPDHWeV9"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
      )}
      {/* --- Reception Venue --- */}
      {new Date().getTime() <= new Date(RECEPTION_DATE).getTime() && (
        <div className="flex flex-col gap-3 bg-[#FBF8F2] mx-5 mt-2 rounded-lg p-3">
          <span className="font-serif-display text-lg">Reception</span>
          <div className="flex flex-col gap-1 text-[#1E2742]">
            <span>Wed, 13th Mar 2024 | At 07:00 PM</span>
            <span className="text-sm">Narayan Heritage Party Lawn,<br/>Mainawati Marg, Kanpur, Uttar Pradesh 208002</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display text-[#9A2143] mt-2 border border-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center hover:text-white hover:bg-[#9A2143]"
            href="https://maps.app.goo.gl/PkG12Ec69RvaYdmA7"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
      )}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* --- Reception Disabled Venue --- */}
      {new Date().getTime() > new Date(RECEPTION_DATE).getTime() && (
        <div className="flex flex-col gap-3 bg-[#f9f9f9] mx-5 mt-2 rounded-lg p-3 !text-[#cfcfcf] courser-default">
          <span className="font-serif-display text-lg">Reception</span>
          <div className="flex flex-col gap-1">
            <span>Wed, 13th Mar 2024 | At 07:00 PM</span>
            <span className="text-sm">Narayan Heritage Party Lawn,<br/>Mainawati Marg, Kanpur, Uttar Pradesh 208002</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display text-[#9A2143] mt-2 border border-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center hover:text-white hover:bg-[#9A2143]"
            href="https://maps.app.goo.gl/PkG12Ec69RvaYdmA7"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
      )}
      {/* -----  Wedding Disabled Venue ----- */}
      {new Date().getTime() > new Date(WEDDING_DATE).getTime() && (
        <div className="flex flex-col gap-3 bg-[#f9f9f9] mx-5 rounded-lg p-3 !text-[#cfcfcf] courser-default">
          <span className="font-serif-display text-lg">Wedding</span>
          <div className="flex flex-col gap-1">
            <span>Mon, 11th Mar 2024 | At 07:00 PM</span>
            <span className="text-sm">Mohini Green Garden,<br/>Sanigawan, Kanpur, Uttar Pradesh 208021</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display mt-2 text-[#9A2143] border border-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center hover:text-white hover:bg-[#9A2143]"
            href="https://maps.app.goo.gl/DzCdSiSbAkPDHWeV9"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default EventVenue;
