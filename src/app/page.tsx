import Image from "next/image";
import React from "react";
import {MacbookScroll} from "../../components/ui/macbook-scroll";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Fuck this app. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
          </Link>
        }
        src={`/moon.png`}
        showGradient={false}
      />
    </div>
  );
}
