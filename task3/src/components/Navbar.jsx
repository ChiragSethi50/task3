import React from "react";

import { Typography } from "@mui/material";
import Home from "../pages/Home";
import {Outlet, Link, Route, Routes } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div>
        <Typography
          variant="h4"
          color={"#FF7101"}
          fontFamily={"Arial, sans-serif"}
          fontWeight={"bold"}
        >
          PraRoz
        </Typography>
      </div>

      <div>
       
       <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/service">SERVICE</Link>
          </li>
          <li>
            <Link to="/design">DESIGN</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      
      </div>

<div>
    
</div>

    </div>
  );
}

export default Navbar;
