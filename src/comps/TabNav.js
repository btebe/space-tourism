import React from "react";

function TabNav({ setTabSelect, tabSelect }) {
  return (
    <div className='tab-list underline-indicators flex'>
      <button
        aria-selected={0 === tabSelect ? "true" : "false"}
        className=' uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setTabSelect(0)}
      >
        Moon
      </button>
      <button
        aria-selected={1 === tabSelect ? "true" : "false"}
        className=' uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setTabSelect(1)}
      >
        Mars
      </button>
      <button
        aria-selected={2 === tabSelect ? "true" : "false"}
        className=' uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setTabSelect(2)}
      >
        Europa
      </button>
      <button
        aria-selected={3 === tabSelect ? "true" : "false"}
        className=' uppercase text-accent ff-sans-cond letter-spacing-2'
        onClick={() => setTabSelect(3)}
      >
        Titan
      </button>
    </div>
  );
}

export default TabNav;
