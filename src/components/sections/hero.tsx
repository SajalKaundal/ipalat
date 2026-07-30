import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-primary border-b-10 border-white">
      <div className="custom-container relative px-13.75 md:px-26.5 md:py-12 flex flex-col md:flex-row justify-start overflow-clip">
        <div className="rounded-full flex flex-col items-center justify-center md:bg-white max-w-171.25 aspect-square">
          <span className="text-[30px] font-gilroy  text-white md:text-primary font-extrabold text-center">
            Das Original. Seit 1937 in Apotheken.
          </span>
          <span className="text-[70px] lg:text-[110px] font-gilroy text-white md:text-primary font-[950] tracking-normal leading-27.5 text-center">
            Das Mittel gegen den rauen Ton.
          </span>
        </div>
          <div className="md:absolute left-1/2 max-h-182.5 max-w-134 mx-auto">
            <Image
              src="/hero/hero.png"
              alt="Hero Image"
              height={1174}
              width={593}
            />
        </div>
      </div>
    </section>
  );
}
