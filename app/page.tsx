import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";

const instrumental = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <main className="p-4 pt-8">
        <h1 className={cn("text-center text-5xl", instrumental.className)}>
          Eine Sammlung von Spielen
        </h1>
        <div className="py-12">
          <Image
            src={"/hero.jpg"}
            alt="Games with friends"
            width={700}
            height={500}
          />
        </div>
      </main>
    </>
  );
}
