import React from "react";

function TabItem({ name, description, distance, travel }) {
  return (
    <article className='destination-info flow'>
      <h2 className='ff-serif fs-800 uppercase'> {name}</h2>
      <p>{description}</p>

      <div className='destination-meta flex'>
        <div>
          <p className='ff-sans-cond uppercase fs-200 letter-spacing-3 text-accent'>
            avg. distance
            <span className='ff-serif uppercase  text-white d-block'>
              {distance}
            </span>
          </p>
        </div>
        <div>
          <p className='ff-sans-cond uppercase fs-200 letter-spacing-3 text-accent'>
            est. travel time
            <span className='ff-serif uppercase text-white d-block'>
              {travel}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default TabItem;
