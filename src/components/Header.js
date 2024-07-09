/*
* Header
  - Logo
  - NavItems
-----------------------------
*/

import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          {/* Named import of LOGO_URL */}
          <img className="logo" src={LOGO_URL} alt="logo" />

          {/* <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=87&t=st=1720367870~exp=1720368470~hmac=167972146782708850090cf16efa9392e4b626c8ae8217a9236ea725779d8c22" alt="logo" /> */}

        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;