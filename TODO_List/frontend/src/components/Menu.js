import React from "react";

const MenuItem = ({ title, isActive }) => {
  let className = "flex-fill px-5 list-group-item text-white";
  if (isActive) {
    className += " bg-success";
  } else {
    className += " bg-primary";
  }
  return <li className={className}>{title}</li>;
};

const MenuList = ({ menu }) => {
  return (
    <ul className="py-4 flex-fill  list-group list-group-horizontal">
      {menu.map((menuItem) => (
        <MenuItem
          title={menuItem.title}
          isActive={menuItem.isActive}
          key={menuItem.id}
        />
      ))}
    </ul>
  );
};
export default MenuList;
