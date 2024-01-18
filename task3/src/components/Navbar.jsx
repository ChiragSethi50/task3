import React from "react";
import { Typography, Box, TextField, Autocomplete, colors, Button } from "@mui/material";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import  './Navbar.css';

function Navbar() {
  return (
    <>
        <div className="nav">
        <h1 className="heading">
          TO-DO LIST
      </h1>
        </div>
    </>
    
  );
}

export default Navbar;
