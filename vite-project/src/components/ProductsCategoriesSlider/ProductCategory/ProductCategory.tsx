import { useState } from "react";

import { useEffect } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const ProductCategory = ({
  children: slides = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      {/* animação indo para o lado */}
      <div className="overflow-hidden relative">
        <div
          className="flex-row transition-transform ease-out duration-500 gap-10 "
          style={{ transform: `translateX(-${curr * 100}px)` }}
        >
          {slides}
        </div>

        {/* Button */}
        <div className="absolute top-14 flex-row justify-between h-0 bg-[red]" >
          <button
            onClick={prev}
            className="rounded shadow bg-[#CACACA] text-[#0B0B0B] hover:bg-[#FFC470]"
          >
            <BsArrowLeftShort size={40} />
          </button>
          <button
            onClick={next}
            className=" rounded shadow bg-[#CACACA] text-[#0B0B0B] hover:bg-[#FFC470]"
          >
            <BsArrowRightShort size={40} />
          </button>
        </div>

        {/* // BARRA */}
        <div className="absolute right-0 left-0 bottom-150px opacity-0">
          <div className="flex-row items-center justify-center gap-3 ">
            {slides.map((item, i) => (
              <div
                key={i}
                className={`
              transition-all w-10 h-1 bg-black full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
