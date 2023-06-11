import React from "react";
import { Select, Checkbox, Input, InputNumber, Row, Col } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { RxCross2 } from "react-icons/rx";
import Style from "./Style.module.css";
import { Value } from "sass";

function FilterPopUp() {
  const cancel = (e: React.SyntheticEvent<EventTarget>): void => {};
  const handleChange = (value: { value: string; label: React.ReactNode }) => {};
  const onChangeNum = () => {}; //add type for value
  const onChange = (e: CheckboxChangeEvent) => {};
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <Row className={`${Style.filterPop} w-[280px] p-3`}>
      <Col className="flex justify-between my-2" span={24}>
        <p className=" font-bold text-sm text-black">Filters</p>
        <span>
          <RxCross2 />
        </span>
      </Col>

      <Col className="my-2" span={24}>
        <p className="my-2 font-normal">LTP range</p>
        <Row className="flex justify-between">
          {/* <Input className="w-[120px]" /> */}
          <InputNumber
            className="w-[120px]"
            defaultValue={1200}
            onChange={onChangeNum}
          />
          <p className="text-lg"> - </p>
          {/* <Input className="w-[120px]" /> */}
          <InputNumber
            className="w-[120px]"
            defaultValue={1200}
            onChange={onChangeNum}
          />
        </Row>
      </Col>

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
        {/* <Input className="w-[120px]" /> */}
        <InputNumber
          className="w-[120px]"
          defaultValue={0}
          onChange={onChangeNum}
        />
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
