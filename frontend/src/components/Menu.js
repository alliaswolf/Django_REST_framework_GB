import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link }) => {
  let className = "flex-fill bg-warning px-5 list-group-item text-white";
  return (
    <li className={className}>
      <Link style={{ textDecoration: "none" }} to={link}>
        {title}
      </Link>
    </li>
  );
};

const MenuList = ({ menu }) => {
  return (
    <div className="navbar">
      <ul className="py-4 flex-fill  list-group list-group-horizontal">
        {menu.map((menuItem) => (
          <MenuItem
            title={menuItem.title}
            link={menuItem.link}
            key={menuItem.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default MenuList;
