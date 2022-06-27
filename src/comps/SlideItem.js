import React from "react";

function SlideItem({ name, role, bio }) {
  return (
    <article className='crew-info flow'>
      <header className='flow flow--space-small'>
        <h2 className='ff-serif fs-600 uppercase'>{role}</h2>
        <p className='ff-serif fs-700 uppercase'>{name}</p>
      </header>

      <p>{bio}</p>
    </article>
  );
}

export default SlideItem;
