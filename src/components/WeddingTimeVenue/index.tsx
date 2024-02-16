import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import vectorDownImg from "../../assets/VectorDown.jpg";

const WeddingTimeVenue = () => {
  return (
    <div id={"ak-time-&-Venue"} className="flex flex-col w-full min-h-screen text-center">
      {/* ------- */}
      <div className="w-full">
        <Image
          className="w-full"
          src={vectorDownImg}
          alt="cover"
          priority
        />
      </div>
      {/* ------- */}
      <div className="flex flex-col gap-6 z-10 pb-[95px]">
        <span className="font-serif-display mb-1">{"Time & Venue"}</span>
        {/* --- Wedding Venue --- */}
        <div className="flex flex-col gap-3 bg-[#FBF8F2] mx-5 rounded-lg p-3">
          <span className="font-serif-display text-lg">Wedding</span>
          <div className="flex flex-col gap-1 text-[#1E2742]">
            <span>Monday, 11th March 2024</span>
            <span>At 07:00 PM</span>
            <span>Mohini Green Garden,<br/>Ganeshpur Road, Sanigawan, Kanpur,<br/>Uttar Pradesh 208021</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display text-white bg-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center"
            href="https://maps.app.goo.gl/DzCdSiSbAkPDHWeV9"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
        {/* --- Reception Venue --- */}
        <div className="flex flex-col gap-3 bg-[#FBF8F2] mx-5 rounded-lg p-3">
          <span className="font-serif-display text-lg">Reception</span>
          <div className="flex flex-col gap-1 text-[#1E2742]">
            <span>Monday, 13th March 2024</span>
            <span>At 07:00 PM</span>
            <span>Narayan Heritage Party Lawn,<br/>Mainawati Marg, Kanpur<br/>Uttar Pradesh 208002</span>
          </div>
          <Link 
            className="flex items-center gap-1 font-serif-display text-white bg-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center"
            href="https://maps.app.goo.gl/PkG12Ec69RvaYdmA7"
            target="_blank"
          >
            <span className="font-emoji text-lg mt-[-2px]">📍</span>
            <span>Location</span>
          </Link>
        </div>
      </div>
      {/* ------- */}
      <div className="absolute bottom-0">
        <Image
          className="w-full rotate-180"
          src={vectorDownImg}
          alt="cover"
          priority
        />
      </div>
    </div>
  );
}

export default WeddingTimeVenue;
