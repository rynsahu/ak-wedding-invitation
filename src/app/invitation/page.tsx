import InvitationCover from "@/components/InvitationCover";
import WeddingInvitation from "@/components/WeddingInvitation/index";
import WeddingTimeVenue from "@/components/WeddingTimeVenue/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reception Invitation | Aryan weds Komal | 13th March 2024",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <InvitationCover />  
      <WeddingInvitation />
      <WeddingTimeVenue />  
    </main>
  );
}
