/*

* Header
  - Logo
  - NavItems
--------------------------------------------------------------
* Body
  - Search
  - RestContainer
  * RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery time 
---------------------------------------------------------------  
* Footer
  - Copyright
  - Links
  - Address
  - Contact
---------------------------------------------------------------  

*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Foot from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      < Header />
      < Body />
      < Foot />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);