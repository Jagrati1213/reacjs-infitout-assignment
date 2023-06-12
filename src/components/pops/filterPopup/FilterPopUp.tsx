import React from "react";
import { Select, Checkbox, Input, InputNumber, Row, Col } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { RxCross2 } from "react-icons/rx";
import Style from "./Style.module.scss";

function FilterPopUp() {
  // hide the popup
  const cancel = (e: React.SyntheticEvent<EventTarget>): void => {
    const parent = document.querySelector(".ant-popover");
    parent?.classList.add("ant-popover-hidden");
  };
  const handleChange = (value: { value: string; label: React.ReactNode }) => {};
  const onChangeNum = () => {}; //add type for value
  const onChange = (e: CheckboxChangeEvent) => {};

  return (
    <Row className={`${Style.filterPop} w-[280px] p-3`}>
      {/* Filters */}
      <Col className="flex justify-between my-2" span={24}>
        <p className=" font-bold text-sm text-black">Filters</p>
        <span onClick={cancel} className=" cursor-pointer">
          <RxCross2 />
        </span>
      </Col>

      {/* LTP range */}
      <Col className="my-2" span={24}>
        <p className="my-2 font-normal text-sm">LTP range</p>
        <Row className="flex justify-between">
          <InputNumber
            className="w-[120px]"
            onChange={onChangeNum}
            placeholder="Minimum LTP"
          />
          <p className="text-lg"> - </p>
          <InputNumber
            className="w-[120px]"
            onChange={onChangeNum}
            placeholder="Maximum LTP"
          />
        </Row>
      </Col>

      {/* LTP change */}
      <Col className="flex justify-between my-2" span={24}>
        <p className="my-2 font-normal">LTP change % by</p>
        <Select
          labelInValue
          defaultValue={{ value: "toady", label: "Today Open" }}
          className="w-[120px]"
          onChange={handleChange}
          options={[
            {
              value: "Yesterday",
              label: "Yesterday",
            },
            {
              value: "toady",
              label: "Today Open",
            },
          ]}
        />
      </Col>

      <Col className="flex justify-between my-2" span={24}>
        <p className="my-2 font-normal">Specific strike</p>
        <InputNumber className="w-[120px]" onChange={onChangeNum} />
      </Col>

      <Col className="flex justify-between my-2" span={24}>
        <p className="my-2 font-normal">Display</p>
        <Col className="flex items-center">
          <Checkbox onChange={onChange}>Calls</Checkbox>
          <Checkbox onChange={onChange}>Puts</Checkbox>
        </Col>
      </Col>
    </Row>
  );
}

export default FilterPopUp;
