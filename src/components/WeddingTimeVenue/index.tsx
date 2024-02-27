import Image from "next/image";
import vectorDownImg from "../../assets/VectorDown.jpg";
import EventVenue from "./EventVenue";

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
      <EventVenue />
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
