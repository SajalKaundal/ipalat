import Image from "next/image";
import Button from "../ui/button";

const featured = [];

export default function Featured() {
  return (
    <section className="bg-primary">
      <div className="custom-container flex flex-col md:flex-row  justify-center items-center overflow-hidden px-5 py-5 md:py-12.5">
        <div className="w-8.75 aspect-square bg-white hidden md:block mx-4"></div>

        <div className="flex flex-col-reverse md:flex-row md:items-end">
          <div className="flex flex-col gap-2.5 md:min-w-80 md:mt-10">
            <span className="font-gilroy text-white text-[60px] font-[950] leading-17.5 md:text-[clamp(40px,4vw,60px)] md:leading-[clamp(3rem,4vw,4.375rem)]">
              ipalat<sup>®</sup>
            </span>

            <span className="font-gilroy text-white text-[40px] font-extrabold md:font-[950] leading-11.25 md:text-[clamp(20px,4vw,60px)] md:leading-[clamp(3rem,4vw,4.375rem)]">
              Die Halspastille
            </span>

            <span className="font-gilroy text-white text-[24px] font-extrabold leading-7.5 md:text-[clamp(10px,2.8vw,40px)] md:leading-[clamp(2rem,2.8vw,2.8125rem)]">
              Das Original. Bewährt bei Heiserkeit & Hustenreiz
            </span>

            <span className="flex justify-end">
              <Button variant="white" className="w-fit">
                <span className="font-gilroy text-primary text-[24px] font-extrabold leading-7.5 md:text-[clamp(10px,2.8vw,40px)] md:leading-[clamp(1rem,2.8vw,2.8125rem)]">
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
        <div className="flex md:hidden justify-center items-center mt-7.5 gap-2.5">
          <div className="aspect-square rounded-full w-3.75 bg-white border border-white"></div>
          <div className="aspect-square rounded-full w-3.75 border border-white "></div>
        </div>
      </div>
    </section>
  );
}
