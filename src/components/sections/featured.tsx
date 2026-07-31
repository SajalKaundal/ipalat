"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/button";
import clsx from "clsx";

const featured = [
  {
    id: 1,
    name: "ipalat",
    subName: "Die Halspastille",
    description: "Das Original. Bewährt bei Heiserkeit & Hustenreiz",
    image: "/featured/featured.png",
  },
  {
    id: 2,
    name: "ipalat",
    subName: "Die Halspastille",
    description: "Das Original. Bewährt bei Heiserkeit & Hustenreiz",
    image: "/featured/featured.png",
  },
];

export default function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = featured[currentIndex];

  const handleNext = () => {
    if (currentIndex < featured.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ("targetTouches" in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ("targetTouches" in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < featured.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="bg-primary select-none">
      <div className="custom-container flex flex-col md:flex-row  justify-center items-center overflow-hidden px-5 py-5 md:py-12.5">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={clsx(
            "w-8.75 aspect-square flex-shrink-0 bg-white hidden md:block mx-4 z-10 transition-opacity",
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
          aria-label="Previous product"
        ></button>

        <div 
          className="overflow-hidden w-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onTouchStart}
          onMouseMove={(e) => {
            if (touchStart !== null) onTouchMove(e);
          }}
          onMouseUp={onTouchEnd}
          onMouseLeave={() => {
            if (touchStart !== null) onTouchEnd();
          }}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out pointer-events-none md:pointer-events-auto"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featured.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 flex flex-col-reverse md:flex-row md:items-end">
                <div className="flex flex-col gap-2.5 md:min-w-80 md:mt-10 pointer-events-auto">
                  <span className="font-gilroy text-white text-[60px] font-[950] leading-17.5 md:text-[clamp(40px,4vw,60px)] md:leading-[clamp(3rem,4vw,4.375rem)]">
                    {product.name}<sup>®</sup>
                  </span>

                  <span className="font-gilroy text-white text-[40px] font-extrabold md:font-[950] leading-11.25 md:text-[clamp(20px,4vw,60px)] md:leading-[clamp(3rem,4vw,4.375rem)]">
                    {product.subName}
                  </span>

                  <span className="font-gilroy text-white text-[24px] font-extrabold leading-7.5 md:text-[clamp(10px,2.8vw,40px)] md:leading-[clamp(2rem,2.8vw,2.8125rem)]">
                    {product.description}
                  </span>

                  <span className="flex justify-end">
                    <Button variant="white" className="w-fit">
                      <span className="font-gilroy text-primary text-[24px] font-extrabold leading-7.5 md:text-[clamp(10px,2.8vw,40px)] md:leading-[clamp(1rem,2.8vw,2.8125rem)]">
                        mehr erfahren
                      </span>
                    </Button>
                  </span>
                </div>
                <div className="rotate-[16.06deg] transition-all duration-300 pointer-events-none">
                  <Image
                    src={product.image}
                    alt="featured image"
                    height={1089}
                    width={1131}
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext}
          disabled={currentIndex === featured.length - 1}
          className={clsx(
            "w-8.75 aspect-square flex-shrink-0 bg-white hidden md:block mx-4 z-10 transition-opacity",
            currentIndex === featured.length - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
          aria-label="Next product"
        ></button>

        <div className="flex md:hidden justify-center items-center mt-7.5 gap-2.5">
          {featured.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={clsx(
                "aspect-square rounded-full w-3.75 border border-white cursor-pointer",
                index === currentIndex ? "bg-white" : "bg-transparent"
              )}
              aria-label={`Go to product ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
