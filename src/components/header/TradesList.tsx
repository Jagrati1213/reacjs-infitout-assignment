import { Col, Row } from "antd";
import React from "react";

const profileListData = [
  {
    name: "NIFTY",
    color: "#27AE60", //green
    profitsVal: "0.35% ",
    value: " 18,245.32",
  },
  {
    name: "BANKNIFTY",
    color: "#27AE60", //green
    profitsVal: "0.7%",
    value: "39,156.1",
  },
  {
    name: "INDIA VIX",
    color: "#ff6b6b", //red
    profitsVal: "-10.9%",
    value: "12.12",
  },
];
const TradesList: React.FC = () => (
  <Row className="flex justify-evenly xl:flex-row flex-col">
    {profileListData.map((ele, i) => {
      return (
        <Col className="xl:text-right xl:my-0 my-4" key={i}>
          <p
            className="mx-0 text-[#4A4A4A] xl:text-[10px] text-[13px] uppercase"
            style={{ lineHeight: "8px" }}
          >
            {ele.name}
          </p>
          <p className="mx-0 text-sm font-medium mt-2">
            <span
              style={{ color: ele.color }}
              className={`xl:text-[10px] text-[15px] mx-1`}
            >
              {ele.profitsVal}
            </span>
            {ele.value}
          </p>
        </Col>
      );
    })}
  </Row>
);

export default TradesList;
