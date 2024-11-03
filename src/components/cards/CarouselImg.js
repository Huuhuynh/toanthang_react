import React, { useState } from "react";
// import { Carousel } from "@material-tailwind/react";
import tw from "twin.macro";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import BG01 from "../../images/bg/bg01.jpg";
import BG02 from "../../images/bg/bg02.jpg";
import BG03 from "../../images/bg/bg03.jpg";

export function CarouselImg() {
  const CarouselContainer = tw.div`overflow-hidden relative`;
  const CarouselImg = tw.div`flex transition ease-out`;
  const CarouselBtn = tw.div`absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl`;
  const ImageCarouse = tw.img`h-[450px] min-w-full object-cover`;
  let slides = [BG03, BG02, BG01];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <CarouselContainer>
      <CarouselImg
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <ImageCarouse src={s} />;
        })}
      </CarouselImg>

      <CarouselBtn>
        <button onClick={previousSlide}>
          {/* <p>previousSlide</p> */}
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          {/* <p>nextSlide</p> */}
          <BsFillArrowRightCircleFill />
        </button>
      </CarouselBtn>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */}
    </CarouselContainer>
  );
}
