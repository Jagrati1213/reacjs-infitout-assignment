import React from "react";
import { Row, Col, Popconfirm, Input, Space } from "antd";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import "./style.css";
import FilterPopUp from "../pops/filterPopup/FilterPopUp";
import Style from "./style.module.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import BusketPopup from "../pops/busketPopup/BusketPopup";

const confirm = () => {};
interface PropsName {
  tradeName: string;
  tradePrice: number;
}
export const TradeEle = (props: PropsName) => {
  return (
    <>
      <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
        {props.tradeName}
      </p>
      <p className="mx-0 text-sm font-medium mt-2">{props.tradePrice}</p>
    </>
  );
};

function ContainerHeader() {
  return (
    <Row
      className={`${Style.mainContainer} flex-wrap lg:flex-row flex-col`}
      justify={"space-between"}
    >
      <Col
        xl={{ span: 11 }}
        xs={{ span: 24 }}
        className="flex xl:justify-evenly md:justify-between xl:items-center lg:my-8 md:flex-nowrap flex-wrap md:flex-row flex-col"
      >
        <Space className="left_box flex lg:justify-evenly md:my-0 md:flex-nowrap flex-wrap">
          <Col className="relative float-label-input">
            <Input
              id="scrip"
              className="bg-white py-2 px-1 block leading-normal uppercase rounded-none"
            />
            <label
              htmlFor="scrip"
              className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
            >
              Scrip
            </label>
          </Col>

          <Col className="relative float-label-input">
            <Input
              id="exp"
              className=" w-full bg-white py-2 px-1 block leading-normal uppercase rounded-none"
            />
            <label
              htmlFor="exp"
              className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
            >
              Exp
            </label>
          </Col>
        </Space>

        <Space className="xl:my-1 my-6 ml-2 md:flex-nowrap flex-wrap">
          <Col className="text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium">
              Spot
            </p>
            <p className="mx-0 text-sm font-medium mt-2">
              18,245.3
              <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
                0.35%
              </span>
            </p>
          </Col>

          <Col className="text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium">
              Fut
            </p>
            <p className="mx-0 text-sm font-medium mt-2">
              18,251.1
              <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
                0.35%
              </span>
            </p>
          </Col>
        </Space>
      </Col>

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
            <div className="flex justify-evenly text-base items-center cursor-pointer">
              <BsSliders className="text-[#14142B]" />
              <p className="mx-2 font-medium">Filters</p>
            </div>
          </Popconfirm>

          <BusketPopup />
        </Space>
      </Col>

      <Col span={24} className="flex lg:justify-end flex-wrap">
        <button className="m-2 px-8 py-[6px] bg-[#2C57F5] text-white rounded-[8px]">
          LTP
        </button>
        <button className="m-2 px-8 py-[6px] bg-[#E1E1E1] text-black rounded-[8px]">
          Greeks
        </button>
      </Col>
    </Row>
  );
}

export default ContainerHeader;
