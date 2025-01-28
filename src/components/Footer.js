/*
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

import React from "react";

const Footer = () => {
    return (
      <div className="footer flex justify-center p-4 m-4">
        <div className="footerContainer">
          {/* <img className="logo" src="" alt="footer" /> */}
        </div>
        <div className="footerItems">
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

  export default Footer;