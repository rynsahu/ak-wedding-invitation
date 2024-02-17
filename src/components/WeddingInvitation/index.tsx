import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import tajFrontImg from "../../assets/tajFront.jpg";
import vectorDownImg from "../../assets/VectorDown.jpg";

const WeddingInvitation = () => {
  return (
    <div id="ak-wedding-invitation" className="relative w-full min-h-screen text-center">
      {/* ------- */}
      <div className="w-full flex flex-col items-center justify-center mt-3 absolute">
        <span className="font-serif-display text-lg">Invitation</span>
        <div className="flex flex-col mt-[4%] justify-center">
          <span className="font-krylon text-lg">Together with their families</span>
          <p className="flex flex-col font-comforter text-[#9A2143] mt-[10%]">
            <span className="flex flex-col gap-5">
              <span className="text-5xl">Aryan</span>
              <span className="font-krylon text-md mt-[-5px]">{"(Son of: Mrs. Kanchan Sahu & Mr. Suresh Sahu)"}</span>
            </span>
            <span className="mt-4">{"&"}</span>
            <span className="flex flex-col">
              <span className="text-5xl">Komal</span>  
              <span className="font-krylon text-md">{"(Daughter of: Mrs. Shyama Devi & Mr. Santosh Sahu)"}</span>
            </span>
          </p>
        </div>
      </div>
      {/* ------- */}
      <div className="w-full">
        <Image
          className="w-full mt-[-22%]"
          src={tajFrontImg}
          alt="cover-img"
          priority
        />
      </div>
      {/* ------- */}
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[10%] w-full flex flex-col mt-3 items-center z-20">
        <p className="font-krylon px-8 text-lg">request the honor of your presence at the <br/>celebration of their union.</p>
        <p className="mt-[5%] font-krylon px-8 text-lg text-[#9A2143]">Be our guest <br/>we expect your presence at <br/>our Wedding {"&"} Reception.</p>
        {/* ------- */}
          <Link 
            className="mt-[9%] flex items-center text-md gap-1 font-serif-display text-white bg-[#9A2143] px-5 py-3 rounded-tl-2xl rounded-br-2xl justify-center w-[200px]"
            href={"#ak-time-&-Venue"}
          >
            <span className="font-emoji text-lg mt-[-2px]">🗓️</span>
            <span>{"Time & Venue"}</span>
          </Link>
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

export default WeddingInvitation;
