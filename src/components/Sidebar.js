import React from "react";
import {
  FaClipboardList,
  FaHashtag,
  FaHome,
  FaMehBlank,
  FaRegBell,
  FaRegBookmark,
  FaRegEnvelope,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <NavLink to="/" exact activeClassName="selected">
            <a href="">
              <FaHome className="icons" />
              Home
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" exact activeClassName="selected">
            <a href="">
              <FaHashtag className="icons" />
              Explore
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" exact activeClassName="selected">
            <a href="">
              <FaRegBell className="icons" />
              Notification
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" exact activeClassName="selected">
            <a href="">
              <FaRegEnvelope className="icons" />
              Messages
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks" exact activeClassName="selected">
            <a href="">
              <FaRegBookmark className="icons" />
              Bookmarks
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/lists" exact activeClassName="selected">
            <a href="">
              <FaClipboardList className="icons" />
              Lists
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" exact activeClassName="selected">
            <a href="">
              <FaUserAlt className="icons" />
              Profile
            </a>
          </NavLink>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" />
            More
          </a>
        </li>
        <div className="sidebar__Btn">
          <a href="">Tweet</a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
