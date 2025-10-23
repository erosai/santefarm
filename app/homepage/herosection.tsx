import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col relative w-full rounded-lg h-[80vh] z-0">
      <Image
        src="/hero.jpg"
        height={400}
        width={1600}
        alt="Hero Image"
        className="rounded-lg contain"
      />
      <div className="absolute  rounded-lg  w-1/2 min-h-[40vh] flex flex-col justify-between bg-">
        <div className="bg-background rounded-br-lg   py-14">
          <h1 className="text-6xl  font-semibold text-gray-700">
            Pharmaceutical <span className="text-foreground ">excellence</span>{" "}
            built on certified quality and strict{" "}
            <span className="text-foreground ">standards.</span>
          </h1>
        </div>
        <div className="w-full space-x-4 flex justify-end p-4 ">
          <Link href="https://www.bureauveritas.ch/en/needs/introduction-good-distribution-practice-gdp">
            <Image
              src="/GDP.png"
              width={140}
              height={40}
              alt="gdp"
              className="drop-shadow-xl"
            />
          </Link>
          <Link
            href="https://certification.bureauveritas.com/needs/quality-management-system-iso-9001-certification"
            className="mt-4"
          >
            <Image
              src="/9001.png"
              width={140}
              height={20}
              alt="9001"
              className="drop-shadow-xl py-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
