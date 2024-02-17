'use client';
import Link from "next/link";

const OpenInvitationButton = () => {
  const handleButtonClick = () => {
    const audio = new Audio("/assets/sound.mp3");
    audio.play();
  }

  return (
    <div>
      <Link
        className="flex items-center gap-1 font-serif-display text-white bg-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl"
        href="#ak-wedding-invitation"
        onClick={handleButtonClick}
      >
        <span className="font-emoji text-lg mt-[-2px]">💌</span>
        <span>Open Invitation</span>
      </Link>
    </div>
  );
};

export default OpenInvitationButton;
