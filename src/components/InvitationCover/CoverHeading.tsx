'use client'

import { usePathname } from "next/navigation";

const CoverHeading = () => {
    const pathname = usePathname();

    const isReceptionInvitation = pathname.includes("invitation");

    return <span className="">The Wedding {isReceptionInvitation ? "Celebration" : ""} Of</span>
}

export default CoverHeading;
