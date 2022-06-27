import React, { useState } from "react";
import { Outlet, Link, useMatch, useResolvedPath } from "react-router-dom";
import spaceLogo from "../assets/shared/logo.svg";

function Nav() {
  const [show, setShow] = useState(false);

  const navToggle = () => {
    setShow(!show);
  };

  const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <>
      <header className='primary-header flex'>
        <div>
          <img className='logo' src={spaceLogo} alt='space-tourism-logo' />
        </div>

        <button
          aria-expanded={show ? "true" : "false"}
          className='mobile-nav-toggle'
          aria-controls='primary-navigation'
          onClick={navToggle}
        >
          <span className='sr-only'>Menu</span>
        </button>
        <nav>
          <ul
            id='primary-navigation'
            className='primary-navigation underline-indicators flex '
            data-visible={show ? "true" : "false"}
          >
            <CustomLink
              className='ff-sans-cond uppercase text-white letter-spacing-2'
              to='/'
            >
              <span aria-hidden='true'>00</span>Home
            </CustomLink>

            <CustomLink
              className='ff-sans-cond uppercase text-white letter-spacing-2'
              to='/destination'
            >
              <span aria-hidden='true'>01</span>Destination
            </CustomLink>

            <CustomLink
              className='ff-sans-cond uppercase text-white letter-spacing-2'
              to='/crew'
            >
              <span aria-hidden='true'>02</span>Crew
            </CustomLink>

            <CustomLink
              className='ff-sans-cond uppercase text-white letter-spacing-2'
              to='/technology'
            >
              <span aria-hidden='true'>03</span>Technology
            </CustomLink>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
}

export default Nav;
