import React from "react";
// import { Link } from "react-router-dom";
// import "./UserLayout.css"; // Make sure to style the layout
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/LowerNav";

const UserLayout = ({ children }) => {
  return(<>
  
    <Navbar2 />
    {children}
    <Footer />
  
  </>)
}
export default UserLayout;
