import React, { useState, useEffect } from "react";
import NumTab from "../comps/NumTab";
import NumTabItem from "../comps/NumTabItem";
import data from "../data.json";
import { useMediaQuery } from "react-responsive";

function Technology() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("destination");
    body.classList.remove("crew");
    body.classList.remove("home");
    body.classList.add("tech");
  }, []);

  const [numSelect, setnumSelect] = useState(0);

  const portrait = data.technology[numSelect].images.portrait.split("/")[3];
  const landscape = data.technology[numSelect].images.landscape.split("/")[3];

  // responsiveness for pics
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 45em)",
  });

  return (
    <main className='grid-container grid-container--tech flow'>
      <h1 className='numbered-title'>
        <span aria-hidden='true'>03</span> space launch 101
      </h1>

      <picture>
        {isDesktopOrLaptop ? (
          <img src={require(`../assets/technology/${portrait}`)} alt='staff' />
        ) : (
          <img src={require(`../assets/technology/${landscape}`)} alt='staff' />
        )}
      </picture>
      <NumTab setnumSelect={setnumSelect} numSelect={numSelect} />
      <NumTabItem
        name={data.technology[numSelect].name}
        description={data.technology[numSelect].description}
      />
    </main>
  );
}

export default Technology;
