import tajEntranceImg from "@/assets/tajEntrance.jpg";
import Image from "next/image";
import OpenInvitationButton from "../OpenInvitationButton/index";
import CoverHeading from "./CoverHeading";

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
            <CoverHeading />
            <h2 className="font-comforter text-4xl text-[#9A2143]">{"Aryan & Komal"}</h2>
          </div>
          {/* ---------- */}
          <OpenInvitationButton />
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
