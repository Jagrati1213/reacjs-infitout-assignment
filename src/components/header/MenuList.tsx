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
      className="justify-evenly font-medium xl:flex-row flex-col"
      style={{ letterSpacing: ".1px" }}
    >
      {menuData.map((ele, i) => {
        return (
          <Col key={i} className="xl:my-0 my-4">
            {ele}
          </Col>
        );
      })}
    </Row>
  </>
);

export default MenuList;
