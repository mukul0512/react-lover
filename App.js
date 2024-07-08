/*

* Header
  - Logo
  - NavItems
-----------------------------
* Body
  - Search
  - RestContainer
  * RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery tie 
-----------------------------  
* Footer
  - Copyright
  - Links
  - Address
  - Contact

*/

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=87&t=st=1720367870~exp=1720368470~hmac=167972146782708850090cf16efa9392e4b626c8ae8217a9236ea725779d8c22" alt="logo" />
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

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestCard = () => {
    return (
        <div className="restCard" style={styleCard}>
            <img className="restLogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/ebcda29a62123bbf8bb8a33bbe2ab847" alt="restLogo" />
            <h3>Rolls King, KFC</h3>
            <h4>Veg/Non-Veg Kabab Rolls</h4>
            <h4>4.5 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
            <div className="restContainer">
                {/* restCard  */}
                <RestCard />
                <RestCard />
                <RestCard />
                <RestCard />
                <RestCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            < Header />

            {/* Body */}
            < Body />

            {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);