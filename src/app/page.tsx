// import Image from "next/image";
// import React from "react";
// import {MacbookScroll} from "../../components/ui/macbook-scroll";
// import { Meteors } from "../../components/ui/meteors";
// import Link from "next/link";

"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/moon.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}





// <MacbookScroll
// title={
//   <span>
//     Fuck this app. <br /> No kidding.
//   </span>
// }
// badge={
//   <Link href="https://peerlist.io/manuarora">
//     {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
//   </Link>
// }
// src={`/moon.png`}
// showGradient={false}
// />