import dynamic from "next/dynamic";

export const Portal = dynamic(() => import("./DynamicPortal"), { ssr: false });
