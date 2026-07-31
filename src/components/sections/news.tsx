import Image from "next/image";
import Button from "../ui/button";

const news = [
  {
    image: "/news/new.png",
    text: "Ossi comnimu scimodictus asperum et voloreic",
    CTAText: "mehr...",
  },
  {
    image: "/news/new.png",
    text: "Ossi comnimu scimodictus asperum et voloreic",
    CTAText: "mehr...",
  },
];

export default function News() {
  return (
    <section>
      <div className="relative h-21.75 w-full bg-primary flex justify-center"></div>
      <div className="custom-container w-full flex flex-col md:flex-row items-center md:justify-around gap-12 md:gap-8 px-22">
        {news.map((news, index) => (
          <div
            key={index}
            className="max-w-89.5 flex flex-col gap-2.5 md:gap-7.5 -translate-y-11"
          >
            <div className="bg-secondary rounded-full w-full overflow-hidden">
              <Image
                src={news.image}
                alt="news image"
                width={445}
                height={445}
                className="animate-[spin_15s_linear_infinite]"
              />
            </div>
            <div className="font-gilroy text-primary text-[30px] md:text-[40px] leading-10 md:leading-11.25 font-extrabold">
              {news.text}
            </div>
            <div className="flex justify-end">
              <Button variant="red">
                <span className="font-gilroy text-white font-[950] text-[40px] md:text-[60px] leading-10 md:leading-17.5">
                  {news.CTAText}
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
