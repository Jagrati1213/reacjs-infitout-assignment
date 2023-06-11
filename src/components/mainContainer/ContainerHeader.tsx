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

function ContainerHeader() {
  return (
    <Row
      className={`${Style.mainContainer} flex-wrap`}
      justify={"space-between"}
    >
      <Col
        xl={{ span: 10 }}
        xs={{ span: 24 }}
        className="flex xl:justify-evenly md:justify-between justify-center items-center my-8 flex-wrap"
      >
        <Space>
          <Col className="relative float-label-input">
            <Input
              id="scrip"
              className="bg-white py-2 px-1 block leading-normal uppercase"
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
              className=" w-full bg-white py-2 px-1 block leading-normal uppercase"
            />
            <label
              htmlFor="exp"
              className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
            >
              Exp
            </label>
          </Col>
        </Space>

        <Space className="md:my-0 my-6">
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
        className="flex md:justify-between justify-center items-center xl:mb-0 mb-4 flex-wrap"
      >
        <Row className="left_box flex justify-evenly md:my-0 my-6">
          <Col className="mx-2 text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
              Max pain
            </p>
            <p className="mx-0 text-sm font-medium mt-2">18,200</p>
          </Col>

          <Col className="mx-2 text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
              PCR
            </p>
            <p className="mx-0 text-sm font-medium mt-2">0.92</p>
          </Col>

          <Col className="flex mx-2 text-left">
            <div className="ml-1">
              <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
                Support 1
              </p>
              <p className="mx-0 text-sm font-medium mt-2">18100</p>
            </div>

            <div className="flex flex-col text-[15px] text-[#14142B]">
              <BiChevronUp className="font-bold ml-1 cursor-pointer" />
              <BiChevronDown className="font-bold ml-1 cursor-pointer" />
            </div>
          </Col>

          <Col className="flex mx-2 text-left">
            <div className="ml-2">
              <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
                Resistance 1
              </p>
              <p className="mx-0 text-sm font-medium mt-2">18500</p>
            </div>

            <div className="flex flex-col text-[15px]">
              <BiChevronUp className="font-bold ml-1 cursor-pointer" />
              <BiChevronDown className="font-bold ml-1 cursor-pointer" />
            </div>
          </Col>
        </Row>

        <Space className={`right_box flex justify-evenly md:my-0 my-6`}>
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
              <BsSliders />
              <p className="mx-2 font-medium">Filters</p>
            </div>
          </Popconfirm>

          <BusketPopup />
        </Space>
      </Col>

      <Col span={22} className="flex justify-end mx-auto">
        <Col className="ml-2">
          <button className="px-8 py-[6px] bg-[#2C57F5] text-white rounded-lg">
            LTP
          </button>
          <button className="ml-3 px-8 py-[6px] bg-[#E1E1E1] text-black rounded-lg">
            Greeks
          </button>
        </Col>
      </Col>
    </Row>
  );
}

export default ContainerHeader;
