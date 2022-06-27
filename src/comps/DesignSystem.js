import React from "react";

function DesignSystem() {
  return (
    <>
      <div className='container'>
        <h1>Design system</h1>

        <section id='colors'>
          <h2 className='numbered-title'>
            <span>01</span> colors
          </h2>
          <div className='flex'>
            <div className='fg--1'>
              <div
                className='bg-dark text-white'
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              >
                #0B0D17
              </div>
              <p>
                <span className='text-accent'>RGB </span> 11, 13, 23
              </p>
              <p>
                <span className='text-accent'>HSL </span> 230°, 34%, 7%
              </p>
            </div>
            <div className='fg--1'>
              <div
                className='bg-accent text-dark'
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              >
                #D0D6F9
              </div>
              <p>
                <span className='text-accent'>RGB </span> 208, 214, 249
              </p>
              <p>
                <span className='text-accent'>HSL </span> 231°, 77%, 90%
              </p>
            </div>
            <div className='fg--1'>
              <div
                className='bg-white text-dark'
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              >
                #FFFFF
              </div>
              <p>
                <span className='text-accent'>RGB </span> 255, 255, 255
              </p>
              <p>
                <span className='text-accent'>HSL </span> 0°, 0%, 100%
              </p>
            </div>
          </div>
        </section>
        <section id='typography' style={{ margin: "4rem 0" }}>
          <h2 className='numbered-title'>
            <span>02 </span>Typography
          </h2>
          <div className='flex'>
            <div className='flow' style={{ "flex-basis": "100%" }}>
              <div>
                <p className='text-accent'>
                  Heading 1 - Bellefair Regular - 150px
                </p>
                <p className='ff-serif fs-900 uppercase'>Earth</p>
              </div>
              <div>
                <p className='text-accent'>
                  Heading 2 - Bellefair Regular - 100px
                </p>
                <p className='ff-serif fs-800 uppercase'>Venus</p>
              </div>
              <div>
                <p className='text-accent'>
                  Heading 3 - Bellefair Regular - 56px
                </p>
                <p className='ff-serif fs-700 uppercase'>Jupiter & Saturn</p>
              </div>
              <div>
                <p className='text-accent'>
                  Heading 4 - Bellefair Regular - 32px
                </p>
                <p className='ff-serif fs-600 uppercase'>
                  Uranus, Neptune, & Pluto
                </p>
              </div>
              <div>
                <p className='text-accent'>
                  Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                  Space
                </p>
                <p className='ff-sans-cond fs-500 uppercase letter-spacing-1'>
                  So, you want to travel to space
                </p>
              </div>
            </div>

            <div
              className='flow'
              style={{ "flex-basis": "100%", "--flow-space": "4rem" }}
            >
              <div>
                <p className='text-accent'>
                  Subheading 1 - Bellefair Regular - 28px
                </p>
                <p className='ff-serif uppercase fs-500'>384,400 km</p>
              </div>
              <div>
                <p className='text-accent'>
                  Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                  Character Space
                </p>
                <p className='ff-sans-cond uppercase fs-400 letter-spacing-3'>
                  Avg. Distance
                </p>
              </div>
              <div>
                <p className='text-accent'>
                  Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                  Space
                </p>
                <p className='ff-sans-cond uppercase fs-300 letter-spacing-2'>
                  Europa
                </p>
              </div>
              <div>
                <p className='text-accent'>Body Text</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Phasellus hendrerit.
                  Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                  vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                  sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                  Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                  vel, nisi.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='interactive-elements'>
          <h2 className='numbered-title'>
            <span>03</span> Interactive elements
          </h2>
          {/*navigation */}
          <div className='flex jc--c bg-nav' style={{ "margin-top": "2rem" }}>
            <nav>
              <ul className='primary-navigation underline-indicators flex'>
                <li className='active'>
                  <a className='uppercase text-white letter-spacing-2' href='#'>
                    <span>01</span>Active
                  </a>
                </li>
                <li>
                  <a className='uppercase text-white letter-spacing-2' href='#'>
                    <span>02</span>Hovered
                  </a>
                </li>
                <li>
                  <a className='uppercase text-white letter-spacing-2' href='#'>
                    <span>03</span>Idle
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex jc--sa'>
            <div style={{ "margin-top": "5rem" }}>
              {/*explore button */}
              <a
                href='sdfk.com'
                className='large-button uppercase ff-sans-serif fs-600 text-dark bg-white'
              >
                Explore
              </a>
            </div>

            <div
              className='flow'
              style={{ "margin-bottom": "50vh", "--flow-space": "8rem" }}
            >
              {/* tabs */}
              <div className='tab-list underline-indicators flex'>
                <button
                  aria-selected='true'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  Moon
                </button>
                <button
                  aria-selected='false'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  Mars
                </button>
                <button
                  aria-selected='false'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  Europa
                </button>
              </div>
              {/* dots*/}
              <div className='dot-indicators flex'>
                <button aria-selected='true'>
                  <span className='sr-only'>slide text</span>
                </button>
                <button aria-selected='false'>
                  <span className='sr-only'>slid text</span>
                </button>
                <button aria-selected='false'>
                  <span className='sr-only'>slid text</span>
                </button>
              </div>
              {/* numbers */}
              <div className='number-indicators flex'>
                <button
                  aria-selected='true'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  1
                </button>
                <button
                  aria-selected='false'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  2
                </button>
                <button
                  aria-selected='false'
                  className='bg-dark uppercase text-accent ff-sans-cond letter-spacing-2'
                >
                  3
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DesignSystem;
