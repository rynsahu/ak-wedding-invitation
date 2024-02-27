import InvitationCover from "@/components/InvitationCover";
import WeddingInvitation from "@/components/WeddingInvitation/index";
import WeddingTimeVenue from "@/components/WeddingTimeVenue/index";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <InvitationCover />  
      <WeddingInvitation />
      <WeddingTimeVenue />  
    </main>
  );
}
