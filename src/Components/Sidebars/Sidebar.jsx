import React from "react";

import { Link } from "react-router-dom";

import SidebarItems from "../../Assets/Data/SidebarRoutes.json";

import logo from "../../Assets/Logo/logo.jpg";

import "./Sidebar.css";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebarItem">
      <div className={`SidebarItemInner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = SidebarItems.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="logoArea">
        <div className="sidebarLogo">
          <img src={logo} alt="logo" />
          <span><h2>ABC University</h2></span>
        </div>
      </div>
      {SidebarItems.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.displayName}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
