import Image from "next/image";
import Button from "../ui/button";

export default function Featured() {
  return (
    <section className="bg-primary">
      <div className="custom-container flex  justify-center items-center overflow-hidden px-5">
        <div className="w-8.75 aspect-square bg-white hidden md:block"></div>
        <div className="flex flex-col-reverse md:flex-row md:items-end">
          <div className="flex flex-col gap-2.5 md:min-w-110 md:mt-10">
            <span className="font-gilroy text-white text-[60px] font-[950] leading-17.5">
              ipalat<sup>®</sup>
            </span>
            <span className="font-gilroy text-white text-[40px] md:text-[60px] font-extrabold md:font-[950] leading-11.25 md:leading-17.5">
              Die Halspastille
            </span>
            <span className="font-gilroy text-white text-[24px] md:text-[40px] font-extrabold leading-7.5 md:leading-11.25 ">
              Das Original. Bewährt bei Heiserkeit & Hustenreiz
            </span>
            <span className="flex justify-end">
              <Button variant="white" className="w-fit">
                <span className="font-gilroy text-primary text-[24px] md:text-[40px] font-extrabold leading-7.5 md:leading-11.25 ">
                  mehr erfahren
                </span>
              </Button>
            </span>
          </div>
          <div className="rotate-[16.06deg]">
            <Image
              src="/featured/featured.png"
              alt="featured image"
              height={1089}
              width={1131}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
