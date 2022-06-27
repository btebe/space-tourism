import React from "react";

function NumTab({ setnumSelect, numSelect }) {
  return (
    <div className='number-indicators flex'>
      <button
        aria-selected={0 === numSelect ? "true" : "false"}
        className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setnumSelect(0)}
      >
        1
      </button>
      <button
        aria-selected={1 === numSelect ? "true" : "false"}
        className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setnumSelect(1)}
      >
        2
      </button>
      <button
        aria-selected={2 === numSelect ? "true" : "false"}
        className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setnumSelect(2)}
      >
        3
      </button>
    </div>
  );
}

export default NumTab;
