import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sideBar.css";
// import { SideBarData } from "./SideBarData";

function SideBar({ data, children }) {
  return (
    <div className='sidebar-menu'>
      <ul className='sidebar-menu-list'>
        {/* /* Mapping through the data array and returning the list items. */ }
        {data.map((item, index) => {
          return (
            <li key={index} className='sidebar-menu-list-item'>
              <NavLink
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      background: 'rgb(96 112 136)',
                      opacity: '1',
                      fontWeight: 'bolder'
                    };
                  }
                }}
                className='sidebar-menu-list-item-link'
                to={item.path}>
                <div className='sidebar-menu-list-item-icon'>{item.icon}</div>
                <div className='sidebar-menu-list-item-name'>{item.name}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
