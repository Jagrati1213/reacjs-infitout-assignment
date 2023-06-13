import { Col, Row } from "antd";
import React from "react";

const menuData = [
  "Dashboard",
  "Option chain",
  "Strategy builder",
  "Positions",
  "Order book",
];
const MenuList: React.FC = () => (
  <>
    {/* Menu Lists */}
    <Row
      className="justify-evenly font-medium xl:flex-row flex-col"
      style={{ letterSpacing: ".1px" }}
    >
      {menuData.map((ele, i) => {
        // for active class
        if (ele === "Option chain") {
          return (
            <Col
              key={i}
              style={{ fontFamily: `'Satoshi', sans-serif` }}
              className="xl:my-0 my-4 text-sm mx-1 text-[#2C57F5] cursor-pointer"
            >
              {ele}
            </Col>
          );
        }
        // for normal
        return (
          <Col
            key={i}
            style={{ fontFamily: `'Satoshi', sans-serif` }}
            className="xl:my-0 my-4 text-black text-sm mx-1 hover:text-[#2C57F5] cursor-pointer font-medium"
          >
            {ele}
          </Col>
        );
      })}
    </Row>
  </>
);

export default MenuList;
