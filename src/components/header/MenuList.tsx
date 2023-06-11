import { Col, Row } from "antd";
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
    <Row
      className="justify-evenly font-medium"
      style={{ letterSpacing: ".1px" }}
    >
      {menuData.map((ele, i) => {
        return <Col key={i}>{ele}</Col>;
      })}
    </Row>
  </>
);

export default MenuList;
