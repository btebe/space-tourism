import React from "react";

function Slider({ setSlideSelect, slideSelect }) {
  return (
    <div className='dot-indicators flex'>
      <button
        aria-selected={0 === slideSelect ? "true" : "false"}
        onClick={() => setSlideSelect(0)}
      >
        <span className='sr-only'>ther commander</span>
      </button>
      <button
        aria-selected={1 === slideSelect ? "true" : "false"}
        onClick={() => setSlideSelect(1)}
      >
        <span className='sr-only'>the mission specialist</span>
      </button>
      <button
        aria-selected={2 === slideSelect ? "true" : "false"}
        onClick={() => setSlideSelect(2)}
      >
        <span className='sr-only'>the pilot</span>
      </button>
      <button
        aria-selected={3 === slideSelect ? "true" : "false"}
        onClick={() => setSlideSelect(3)}
      >
        <span className='sr-only'>the crew engineer</span>
      </button>
    </div>
  );
}

export default Slider;
