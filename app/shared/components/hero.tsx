import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col relative w-full rounded-lg h-[80vh] overflow-hidden">
      <Image
        src="/hero.jpg"
        fill
        alt="Hero Image"
        className="rounded-lg object-cover"
        priority
      />
      <div className="absolute inset-0 rounded-lg w-full md:w-1/2 min-h-[40vh] flex flex-col justify-between">
        <div className="bg-background backdrop-blur-sm rounded-br-lg py-8 md:py-14 px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-700 leading-tight">
            Pharmaceutical <span className="text-foreground">excellence</span>{" "}
            built on certified quality and strict{" "}
            <span className="text-foreground">standards.</span>
          </h1>
        </div>
        <div className="w-full flex justify-start md:justify-end gap-4 p-4 md:p-6">
          <Link
            href="https://www.bureauveritas.ch/en/needs/introduction-good-distribution-practice-gdp"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/GDP.png"
              width={140}
              height={40}
              alt="GDP Certification"
              className="drop-shadow-xl w-24 md:w-32 lg:w-[140px] h-auto"
            />
          </Link>
          <Link
            href="https://certification.bureauveritas.com/needs/quality-management-system-iso-9001-certification"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/9001.png"
              width={140}
              height={40}
              alt="ISO 9001 Certification"
              className="drop-shadow-xl w-24 md:w-32 lg:w-[140px] h-auto mt-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
