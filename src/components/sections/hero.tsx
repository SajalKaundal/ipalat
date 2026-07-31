import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary border-b-10 border-white">
      <div className="custom-container relative px-5 md:px-26.5 md:py-11 flex flex-col md:flex-row justify-start overflow-clip">
        <div className="rounded-full flex flex-col items-center justify-center md:bg-white max-w-171.25 md:aspect-square md:w-[60%] md:px-7 pt-10 md:pt-0">
          <span className="font-gilroy font-extrabold text-center text-white md:text-primary text-[30px] leading-10 md:leading-[clamp(14px,1.8vw,30px)] md:text-[clamp(14px,1.8vw,30px)]">
            Das Original. Seit 1937 in Apotheken.
          </span>

          <span className="font-gilroy font-[950] text-center text-white md:text-primary leading-[0.9] text-[70px] md:text-[clamp(32px,6vw,110px)]">
            Das Mittel gegen den rauen Ton.
          </span>
        </div>
        <div className="md:w-[40%] left-1/2 md:absolute  max-h-182.5 max-w-79.75 md:max-w-134  mx-auto pt-10.25 md:pt-0">
          <Image
            src="/hero/hero.png"
            alt="Hero Image"
            height={1174}
            width={593}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
