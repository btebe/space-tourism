import React, { useState, useEffect, useRef } from "react";
import Slider from "../comps/Slider";
import SlideItem from "../comps/SlideItem";
import data from "../data.json";
function Crew() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("home");
    body.classList.remove("destination");
    body.classList.remove("tech");
    body.classList.add("crew");
  }, []);
  //works as current
  const [slideSelect, setSlideSelect] = useState(0);
  const slideLength = data.crew.length;

  //slide autoplay
  const autoPlayRef = useRef();
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  const nextSlide = () => {
    setSlideSelect(slideSelect === slideLength - 1 ? 0 : slideSelect + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoPlayRef.current();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pic = data.crew[slideSelect].images.png.split("/")[3];
  const picwp = data.crew[slideSelect].images.webp.split("/")[3];
  return (
    <main className='grid-container grid-container--crew flow'>
      <h1 className='numbered-title'>
        <span aria-hidden='true'>02</span> meet your crew
      </h1>
      <picture>
        <source srcSet={require(`../assets/crew/${picwp}`)} type='image/webp' />
        <img src={require(`../assets/crew/${pic}`)} alt='staff' />
      </picture>

      <Slider setSlideSelect={setSlideSelect} slideSelect={slideSelect} />
      <SlideItem
        name={data.crew[slideSelect].name}
        role={data.crew[slideSelect].role}
        bio={data.crew[slideSelect].bio}
      />
    </main>
  );
}

export default Crew;
