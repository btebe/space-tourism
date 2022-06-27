import React, { useEffect, useState } from "react";
import data from "../data.json";
import TabNav from "../comps/TabNav";
import TabItem from "../comps/TabItem";

function Destination() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("home");
    body.classList.remove("crew");
    body.classList.remove("tech");
    body.classList.add("destination");
  }, []);
  const [tabSelect, setTabSelect] = useState(0);
  const pic = data.destinations[tabSelect].images.png.split("/")[3];
  const picwp = data.destinations[tabSelect].images.webp.split("/")[3];

  return (
    <main className='grid-container grid-container--destination flow'>
      <h1 className='numbered-title'>
        <span aria-hidden='true'>01</span> pick your destination
      </h1>
      <picture>
        <source
          srcSet={require(`../assets/destination/${picwp}`)}
          type='image/webp'
        />
        <img src={require(`../assets/destination/${pic}`)} alt='planet' />
      </picture>

      <TabNav setTabSelect={setTabSelect} tabSelect={tabSelect} />
      <TabItem
        name={data.destinations[tabSelect].name}
        description={data.destinations[tabSelect].description}
        distance={data.destinations[tabSelect].distance}
        travel={data.destinations[tabSelect].travel}
      />
    </main>
  );
}

export default Destination;
