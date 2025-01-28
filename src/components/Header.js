/*
* Header
  - Logo
  - NavItems
-----------------------------
*/

// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Render");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector hook
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render (just once).
  // if dependency array is [btnNameReact] => called every time btnNameReact is updated. 
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  return (
    // <div className="header">
    <div className="flex justify-between shadow-lg sm: bg-yellow-50 lg:bg-green-50  ">
      <div className="logoContainer">
        {/* Named import of LOGO_URL */}
        {/* <img className="logo" src={LOGO_URL} alt="logo" /> */}
        <img className="w-30" src={LOGO_URL} alt="logo" />

        {/* <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=87&t=st=1720367870~exp=1720368470~hmac=167972146782708850090cf16efa9392e4b626c8ae8217a9236ea725779d8c22" alt="logo" /> */}

      </div>
      {/* <div className="navItems"> */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🤢" : "😡"} </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          {/* using <a href="/">Home<a/> tag is not a good practice because it loads whole page while navigate instead of this use link component imported from react-router-dom  */}
          {/* <li><a href="/about">About</a></li>  */}
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="font-bold px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser} </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;