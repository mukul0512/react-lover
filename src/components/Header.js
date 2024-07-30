/*
* Header
  - Logo
  - NavItems
-----------------------------
*/

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render (just once).
  // if dependency array is [btnNameReact] => called every time btnNameReact is updated. 
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logoContainer">
        {/* Named import of LOGO_URL */}
        <img className="logo" src={LOGO_URL} alt="logo" />

        {/* <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=87&t=st=1720367870~exp=1720368470~hmac=167972146782708850090cf16efa9392e4b626c8ae8217a9236ea725779d8c22" alt="logo" /> */}

      </div>
      <div className="navItems">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* using <a href="/">Home<a/> tag is not a good practice because it loads whole page while navigate instead of this use link component imported from react-router-dom  */}
          {/* <li><a href="/about">About</a></li>  */}
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="login" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            // console.log(btnNameReact);
          }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;