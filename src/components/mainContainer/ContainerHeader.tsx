import React, { useState } from "react";
import {
  Row,
  Col,
  Badge,
  Select,
  message,
  Popconfirm,
  Input,
  Checkbox,
} from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "./style.css";
import FilterPopUp from "../pops/FilterPopUp";
import Style from "./style.module.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import BusketPopup from "../pops/BusketPopup";

const confirm = () => {
  message.info("Clicked on Yes.");
};

function ContainerHeader() {
  return (
    <Row className={`${Style.mainContainer}`} justify={"space-between"}>
      <Col span={12} className="flex justify-evenly items-center my-8">
        <div className="relative float-label-input">
          <input
            type="text"
            id="scrip"
            className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-1 block appearance-none leading-normal uppercase"
          />
          <label
            htmlFor="scrip"
            className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
          >
            Scrip
          </label>
        </div>

        <div className="relative float-label-input">
          <input
            type="text"
            id="exp"
            className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-1 block appearance-none leading-normal uppercase"
          />
          <label
            htmlFor="exp"
            className="absolute top-3 left-0 text-[#8F8F8F] pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
          >
            Exp
          </label>
        </div>

        <div className="text-left">
          <p className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium">
            Spot
          </p>
          <p className="mx-0 text-sm font-medium mt-2">
            18,245.3
            <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
              0.35%
            </span>
          </p>
        </div>

        <div className="text-left">
          <p className="mx-0 text-[#888888] xl:text-[12px] text-[10px] font-medium">
            Fut
          </p>
          <p className="mx-0 text-sm font-medium mt-2">
            18,251.1
            <span className="text-[#27AE60] xl:text-[12px] text-[10px] mx-2">
              0.35%
            </span>
          </p>
        </div>
      </Col>

      <Col span={10} className="flex justify-between items-center">
        <div className="left_box flex justify-evenly">
          <div className="mx-2 text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
              Max pain
            </p>
            <p className="mx-0 text-sm font-medium mt-2">18,200</p>
          </div>

          <div className="mx-2 text-left">
            <p className="mx-0 text-[#888888] xl:text-[12px] font-medium">
              PCR
            </p>
            <p className="mx-0 text-sm font-medium mt-2">0.92</p>
          </div>

          <div className="flex mx-2 text-left">
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
          </div>

          <div className="flex mx-2 text-left">
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
          </div>
        </div>
        <div className={`right_box flex justify-evenly`}>
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
        </div>
      </Col>

      <Col span={22} className="flex justify-end mx-auto">
        <div className="ml-2">
          <button className="px-8 py-[6px] bg-[#2C57F5] text-white rounded-lg">
            LTP
          </button>
          <button className="ml-3 px-8 py-[6px] bg-[#E1E1E1] text-black rounded-lg">
            Greeks
          </button>
        </div>
      </Col>
    </Row>
  );
}

export default ContainerHeader;
