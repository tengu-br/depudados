import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  // const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = (e) => {
    // setDropdownStatus(!dropdownStatus);
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      {/* <li className="dropdown">
        <Link href="/">
          <>
            <a>Home</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/">
              <a>Home One</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Home Two</a>
            </Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link href="/presenca">
          Presença
        </Link>
      </li>

      <li>
        <Link href="/gastos">
          Gastos
        </Link>
      </li>
      <li>
        <Link href="/proposicoes">
          Proposições
        </Link>
      </li>
      <li>
        <Link href="/partidos">
          Partidos
        </Link>
      </li>
      <li>
        <Link href="/deputados">
          Deputados
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
