import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import PostProduct from "./PostProduct";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const [ismodalOpen, setIsmodalOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Toaster position="bottom-left" />

        <h3 className="navbar__child">
          <Link className="link" to="/">
            Logo
          </Link>
        </h3>

        <div className="icon-wrapper   navbar__child--center">
          <BiSearchAlt className="register__icons" />
          <input
            className="search-bar "
            type="text"
            placeholder="Search Anything"
          />
        </div>
        <IoIosAdd
          className="navbar__child post-product"
          onClick={() => {
            setIsmodalOpen(true);
          }}
        />
        <h3 className="navbar__child">
          <Link className="link" to="/login">
            Log In
          </Link>
        </h3>
        <AiOutlineMenu
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
          className="sidebar-toggle"
        />
      </nav>
      {ismodalOpen && <PostProduct setIsmodalOpen={setIsmodalOpen} />}
    </div>
  );
};

export default Navbar;
