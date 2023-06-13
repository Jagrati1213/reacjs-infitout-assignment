import React, { useState } from "react";
import { Select, Checkbox, Input, InputNumber, Row, Col, Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { RxCross2 } from "react-icons/rx";
import Style from "./Style.module.scss";

// interface textFields {
//   min: number | undefined;
//   max: number | undefined;
//   change: string | undefined;
//   strike: number | undefined;
// }
const FilterPopUp: React.FC = () => {
  // const [resetVal, setResetVal] = useState<textFields>();

  // hide the popup
  const cancel = (e: React.SyntheticEvent<EventTarget>): void => {
    const parent = document.querySelector(".ant-popover");
    parent?.classList.add("ant-popover-hidden");
  };
  const handleChange = (value: { value: string; label: React.ReactNode }) => {};
  const onChangeNum = () => {}; //add type for value
  const onChange = (e: CheckboxChangeEvent) => {};
  // const handlerReset = () => {};
  return (
    <>
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
              className="w-[120px] rounded-none"
              onChange={onChangeNum}
              placeholder="Minimum LTP"
            />
            <p className="text-lg"> - </p>
            <InputNumber
              className="w-[120px] rounded-none"
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
            className="w-[120px] rounded-none"
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

        {/* strike */}
        <Col className="flex justify-between my-2" span={24}>
          <p className="my-2 font-normal">Specific strike</p>
          <InputNumber
            className="w-[120px] rounded-none"
            onChange={onChangeNum}
          />
        </Col>

        {/* Display */}
        <Col className="flex justify-between my-2" span={24}>
          <p className="my-2 font-normal">Display</p>
          <Col className="flex items-center">
            <Checkbox onChange={onChange}>Calls</Checkbox>
            <Checkbox onChange={onChange}>Puts</Checkbox>
          </Col>
        </Col>
      </Row>

      {/* <Row className="px-3 py-2 footer_filter" justify={"end"}>
        <Button className="rounded-none" onClick={handlerReset}>
          Reset
        </Button>
        <Button type="primary" className="ml-2 rounded-none">
          Apply
        </Button>
      </Row> */}
    </>
  );
};

export default FilterPopUp;
