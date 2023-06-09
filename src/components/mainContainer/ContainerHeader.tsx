import React, { useEffect, useState } from "react";
import { Row, Col, Popconfirm, Input, Space, Select } from "antd";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import "./style.css";
import FilterPopUp from "../pops/filterPopup/FilterPopUp";
import Style from "./style.module.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import BasketPopup from "../pops/basketPopup/BasketPopup";

const confirm = () => {};
interface PropsName {
  tradeName: string;
  tradePrice: number;
}

// Trades Element
export const TradeEle = (props: PropsName) => {
  return (
    <>
      <p
        className="mx-0 text-[#888888] text-[12px] font-medium"
        style={{ fontFamily: `'Playfair Display', serif` }}
      >
        {props.tradeName}
      </p>
      <p
        className="mx-0 text-sm font-medium mt-2"
        style={{ fontFamily: `'Satoshi', sans-serif` }}
      >
        {props.tradePrice}
      </p>
    </>
  );
};

const ContainerHeader: React.FC = () => {
  // set static scrip name
  const scripData = ["BANKNIFTY", "NIFTY", "ABB"];

  // create state
  const [scripName, setScripName] = useState({});
  const [scripDates, setScripDates] = useState<string[]>([]);
  const [defaultval, setDefaultVal] = useState(scripDates[0]);

  // fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch(
        `https://api.tracktrades.in/get_option_chain?scrip=${scripName}`
      );
      const data = await res.json();
      // store data in state
      setScripDates(data.option_expiry_dates);
      setDefaultVal(data.option_expiry_dates[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [scripName]);

  // change Scrip Name
  const handleProvinceChange = (value: string) => {
    setScripName(value);
    setDefaultVal(scripDates[0]);
  };

  // change Scrip Date
  const onScripDateChange = (value: string) => {
    setDefaultVal(value);
  };

  return (
    // Main Container
    <Row
      className={`${Style.mainContainer} flex-wrap lg:flex-row flex-col`}
      justify={"space-between"}
    >
      {/* Input & variable */}
      <Col
        xl={{ span: 11 }}
        xs={{ span: 24 }}
        className="flex xl:justify-evenly md:justify-between xl:items-center md:flex-nowrap flex-wrap md:flex-row flex-col"
      >
        <Space className="left_box flex lg:justify-evenly md:my-0 md:flex-nowrap flex-wrap">
          <Col className="relative float-label-input">
            <Select
              showSearch
              style={{ width: 200 }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              onChange={handleProvinceChange}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={scripData.map((val, i) => ({
                label: val,
                value: val,
              }))}
            />
            <label
              htmlFor="scrip"
              style={{ fontFamily: `'Playfair Display', serif` }}
              className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
            >
              Scrip
            </label>
          </Col>

          <Col className="relative float-label-input">
            <Select
              id="exp"
              className="bg-white"
              style={{ width: 150 }}
              onChange={onScripDateChange}
              value={defaultval}
              options={scripDates.map((val, i) => ({
                label: val,
                value: val,
              }))}
            />
            <label
              htmlFor="exp"
              style={{ fontFamily: `'Playfair Display', serif` }}
              className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
            >
              Exp
            </label>
          </Col>
        </Space>

        <Space className="xl:my-1 my-2 ml-2 md:flex-nowrap flex-wrap">
          <Col className="text-left">
            <p
              className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium"
              style={{ fontFamily: `'Playfair Display', serif` }}
            >
              Spot
            </p>
            <p
              className="mx-0 text-sm font-medium mt-2"
              style={{ fontFamily: `'Satoshi', sans-serif` }}
            >
              18,245.3
              <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
                0.35%
              </span>
            </p>
          </Col>

          <Col className="text-left">
            <p
              className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium"
              style={{ fontFamily: `'Playfair Display', serif` }}
            >
              Fut
            </p>
            <p
              className="mx-0 text-sm font-medium mt-2"
              style={{ fontFamily: `'Satoshi', sans-serif` }}
            >
              18,251.1
              <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
                0.35%
              </span>
            </p>
          </Col>
        </Space>
      </Col>

      {/* variable & button for popup */}
      <Col
        xl={{ span: 11 }}
        xs={{ span: 24 }}
        className="flex md:justify-between lg:items-center xl:mb-0 mb-4 flex-wrap md:flex-row flex-col"
      >
        <Row className="left_box flex lg:justify-evenly md:my-0 md:flex-nowrap flex-wrap">
          <Col className="m-2 text-left">
            <TradeEle tradeName="Max pain" tradePrice={18200} />
          </Col>

          <Col className="m-2 text-left">
            <TradeEle tradeName="PCR" tradePrice={0.92} />
          </Col>

          <Col className="flex m-2 text-left">
            <div className="ml-1">
              <TradeEle tradeName="Support 1" tradePrice={18100} />
            </div>

            <div className="flex flex-col text-[15px] text-[#14142B]">
              <BiChevronUp className="font-bold ml-1 cursor-pointer" />
              <BiChevronDown className="font-bold ml-1 cursor-pointer" />
            </div>
          </Col>

          <Col className="flex m-2 text-left">
            <div className="ml-2">
              <TradeEle tradeName="Resistance 1" tradePrice={18500} />
            </div>

            <div className="flex flex-col text-[15px] text-[#14142B]">
              <BiChevronUp className="font-bold ml-1 cursor-pointer" />
              <BiChevronDown className="font-bold ml-1 cursor-pointer" />
            </div>
          </Col>
        </Row>

        <Space
          className={`right_box flex lg:justify-evenly md:my-0 my-6 md:flex-nowrap flex-wrap`}
        >
          <Popconfirm
            placement="bottomRight"
            title={<FilterPopUp />}
            onConfirm={confirm}
            showCancel={true}
            okText="Apply"
            cancelText="Reset"
            icon={
              <QuestionCircleOutlined
                style={{ color: "red", display: "none" }}
              />
            }
          >
            <div
              className="flex justify-evenly text-base items-center cursor-pointer"
              style={{ fontFamily: `'Satoshi', sans-serif` }}
            >
              <BsSliders className="text-[#14142B]" />
              <p className="mx-2 font-medium">Filters</p>
            </div>
          </Popconfirm>

          <BasketPopup />
        </Space>
      </Col>

      {/* Bottom buttons */}
      <Col
        span={24}
        className="flex lg:justify-end flex-wrap"
        style={{ fontFamily: `'Satoshi', sans-serif` }}
      >
        <button className="m-2 px-8 py-[6px] bg-[#2C57F5] text-white rounded-[8px]">
          LTP
        </button>
        <button className="m-2 px-8 py-[6px] bg-[#E1E1E1] text-black rounded-[8px]">
          Greeks
        </button>
      </Col>
    </Row>
  );
};

export default ContainerHeader;
