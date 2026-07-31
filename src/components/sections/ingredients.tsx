import Image from "next/image";

const icons = [
  "/ingredients/icon1.png",
  "/ingredients/icon2.png",
  "/ingredients/icon3.png",
  "/ingredients/icon4.png",
];

export default function Ingredients() {
  return (
    <section className="custom-container px-5  md:px-10 py-33.5">
      <div className="font-gilroy text-primary text-[60px] leading-17.5 font-[950]">
        In-Hals-Stoffe
      </div>
      <div className="relative flex">
        <div className="relative w-[40%]">
          <div className=" w-full max-h-248.25 absolute -left-10 pt-7.5 md:pt-15">
            <Image
              src="/ingredients/ingredients.png"
              alt="Ingredients"
              height={933}
              width={597}
              className="min-w-51 absolute right-0"
            />
          </div>
        </div>
        <div className="w-[60%] max-w-190 pt-[30%]">
          <div className="font-gilroy text-primary text-[20px] md:text-[30px] leading-7.5 md:leading-11 font-normal">
            <p>
              Ein klares Nein: ipalat® ist und bleibt ein Klassiker, dessen
              natürliche Inhaltsstoffe und deren Zusammensetzung sich nicht
              verändert haben. Die Pastillen sind die gleichen, auch wenn sich
              das Aussehen der Verpackung geändert hat.
            </p>
            <br />
            <p className="hidden md:block">
              Auch die Dosen tragen weiterhin den bewährten Plopp-Verschluss,
              der sich mit nur einer Hand öffnen lässt.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="md:w-[60%] grid grid-cols-4 gap-6.25">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-full max-w-33.25 h-43.25 max-h-43.25 flex items-center justify-center"
            >
              <Image
                src={icon}
                alt="icon"
                width={207}
                height={174}
                className="w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
