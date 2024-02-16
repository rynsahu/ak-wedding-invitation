import tajEntranceImg from "@/assets/tajEntrance.jpg";
import Image from "next/image";
import Link from "next/link";

const InvitationCover = () => {
  return (
    <div id="ak-envelope-cover" className="relative w-full min-h-screen overflow-hidden z-20">
      <div className="absolute w-full z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%]">
        <div className="flex flex-col gap-14 justify-center items-center">
          {/* ---------- */}
          <div className="flex flex-col items-center gap-2 text-4xl">
            <h1 className="font-serif-display text-[#BFA054]">Namaste</h1>
            <span className="font-emoji">🙏</span>
          </div>
          {/* ---------- */}
          <div className="flex flex-col gap-3 items-center font-krylon">
            <span className="">The Wedding Of</span>
            <h2 className="font-comforter text-4xl">{"Aryan & Komal"}</h2>
          </div>
          {/* ---------- */}
          <Link 
            className="flex items-center gap-1 font-serif-display text-white bg-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl"
            href="#ak-wedding-invitation"
          >
            <span className="font-emoji text-lg mt-[-2px]">💌</span>
            <span>Open Invitation</span>
          </Link>
        </div>
      </div>

      <Image
        src={tajEntranceImg}
        alt="Invitation card"
        priority
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default InvitationCover;
