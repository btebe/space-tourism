import React from "react";

function NumTabItem({ name, description }) {
  return (
    <article className='tech-info flow'>
      <header className='flow flow--space-small'>
        <h2 className='ff-sans-cond fs-400 uppercase letter-spacing-1 text-accent'>
          the technology...
        </h2>
        <p className='ff-serif fs-700 uppercase'>{name}</p>
      </header>

      <p>{description}</p>
    </article>
  );
}

export default NumTabItem;
