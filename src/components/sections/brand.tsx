import Button from "../ui/button";

export default function Brand() {
  return (
    <section className="bg-text-primary">
      <div className="custom-container flex md:justify-end px-5 md:px-8.75 py-6.25">
        <div className="w-171.25 rounded-full md:bg-white md:aspect-square flex flex-col justify-center md:items-center ">
          <div className="font-gilroy text-white md:text-primary text-[60px] md:text-[110px] leading-17.5 md:leading-27.5 font-[950]">
            <div>Die Marke</div>
            <div>
              ipalat<sup>®</sup>
            </div>
          </div>
          <div className="text-[20px] md:text-[30px] leading-7.5 md:leading-11 text-white md:text-primary max-w-116.75">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </div>
          <div className="flex justify-end">
            <Button variant="red">
              <span className="text-[40px] md:text-[60px] leading-10 md:leading-17.5 text-white">
                weiter lesen
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
