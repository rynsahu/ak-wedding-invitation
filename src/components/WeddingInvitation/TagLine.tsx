'use client'

import { usePathname } from "next/navigation";

const TagLine = () => {
    const pathname = usePathname();

    const isReceptionInvitation = pathname.includes("invitation");
    const isWeddingInvitation = pathname.includes("invite");

    const getTagLine = () => {
        if (isReceptionInvitation) return "Reception"
        else if (isWeddingInvitation) return "Wedding"
        else return "Wedding & Reception";
    }

    return (
        <p className="mt-[5%] font-krylon px-8 text-lg text-[#9A2143]">Be our guest <br/>we expect your presence at <br/>our {getTagLine()}.</p>
    );
}

export default TagLine;
