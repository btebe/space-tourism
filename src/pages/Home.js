import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("destination");
    body.classList.remove("crew");
    body.classList.remove("tech");
    body.classList.add("home");
  }, []);

  return (
    <main className='grid-container grid-container--home'>
      <div>
        <h1 className='text-accent ff-sans-cond fs-500 uppercase letter-spacing-1'>
          So, you want to travel to
          <span className='text-white ff-serif fs-900 uppercase d-block'>
            Space
          </span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to='/destination'
          className='large-button uppercase ff-sans-serif text-dark bg-white'
        >
          Explore
        </Link>
      </div>
    </main>
  );
}

export default Home;
