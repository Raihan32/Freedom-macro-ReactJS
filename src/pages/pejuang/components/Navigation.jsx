import React from "react";
import "./navigationStyles.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="subnav">
        <div className="subnav_container">
          <ul className="subnav_list">
            <li className="subnav_item">
              <NavLink to="/komunitas/about" className={"subnav_item_title"}>
                About
              </NavLink>
            </li>
            <li className="subnav_item">
              <NavLink to="/komunitas/acara" className={"subnav_item_title"}>
                Event
              </NavLink>
            </li>
            <li className="subnav_item">
              <NavLink to="/komunitas/member" className={"subnav_item_title"}>
                Members
              </NavLink>
            </li>
            <li className="subnav_item">
              <NavLink to="/komunitas/photos" className={"subnav_item_title"}>
                Photos
              </NavLink>
            </li>
            <li className="subnav_item">
              <NavLink to="/komunitas/diskusi" className={"subnav_item_title"}>
                Diskusi
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
