import React from "react";

const menuData = [
  "Dashboard",
  "Option chain",
  "Strategy builder",
  "Position",
  "Order book",
];
const MenuList: React.FC = () => (
  <>
    <ul
      className="flex justify-evenly font-medium"
      style={{ letterSpacing: ".1px" }}
    >
      {menuData.map((ele, i) => {
        return <li key={i}>{ele}</li>;
      })}
    </ul>
  </>
);

export default MenuList;
