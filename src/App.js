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
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";

const AppLayout = () => {
  console.log(< Body />);
  return (
    <div className="app">
      < Header />
      < Outlet />

      {/* if path = "/"  */}
      {/* < Body /> */}
      {/* if path = "/about"  */}
      {/* < About /> */}
      {/* if path = "/contact"  */}
      {/* < Contact /> */}
      < Foot />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: < Body />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/cart",
        element: < Cart />
      },

      {
        path: "/city/bangalore/:restID",  // Dynamic Routing
        element: < RestMenu />
      }

    ],

    errorElement: <Error />
  }

  // {
  //   path: "/about",
  //   element: <About />
  // },

  // {
  //   path: "/contact",
  //   element: <Contact />
  // }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);