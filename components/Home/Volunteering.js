import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";

import { useEffect, useState, useCallback } from "react";
import { DotButton, PrevButton, NextButton, EmblaConfiguration } from "../../helpers/EmblaCarousel";

const Volunteering = () => {
  const volunteerings = [1,2,3,4,5,7,8,9];

  const [viewportRef, embla] = useEmblaCarousel(EmblaConfiguration);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <h2 className="title">Volunteerings</h2>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {volunteerings.map((volunteering, i) => (
               <div className="embla__slide" key={i}>
                 <div className="embla__slide__inner">
                   {`slide ${volunteering}`}
                   <Image src="/images/480x480.png" height="480" width="480"></Image>
                 </div>
               </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled}></PrevButton>
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled}></NextButton>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index == selectedIndex}
            onClick={() => scrollTo(index)}/>
        ))}
      </div>
    </>
   );
}

export default Volunteering;