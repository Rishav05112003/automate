import Navbar from "@/components/global/navbar";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients } from "@/lib/constant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-1/12 w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <div className="flex p-10 mt-60 md:mt-40 items-center flex-col">
            <h1 className="text-5xl md:text-6xl md:px-36 bg-clip-text text-center text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
              Automate Your Tasks Within not Hours but Minutes with AMate
            </h1>
            <p className="font-sans text-xl md:text-2xl text-center px-30 text-gray-500 mt-5">With A-Mate You can build your workflow within minutes and entirely automate your tasks</p>
             <Button
                  
                  className="p-8 mt-10 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-b-md border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-200  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
          </div>

        </div>
      </section>
     <section className="flex items-center justify-center w-full h-1/2 bg-black rounded-md mt-10">
       <InfiniteMovingCards
        className="text-center"
        items={clients}
        direction="right"
        speed="slow"
      />
     </section>
    </main>
  );
}
