import React from "react";
import { Select, Checkbox, Input } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { RxCross2 } from "react-icons/rx";
import "../mainContainer/style.module.scss";

function FilterPopUp() {
  const cancel = (e: React.SyntheticEvent<EventTarget>): void => {};
  const handleChange = (value: { value: string; label: React.ReactNode }) => {};
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
    <section className="w-[280px] p-3">
      <div className="flex justify-between my-2">
        <p className=" font-bold text-sm text-black">Filters</p>
        <span>
          <RxCross2 />
        </span>
      </div>

      <div className="my-2">
        <p className="my-2 font-normal">LTP range</p>
        <div className="flex justify-between">
          <Input className="w-[120px]" />
          <p className="text-lg"> - </p>
          <Input className="w-[120px]" />
        </div>
      </div>

      <div className="flex justify-between my-2">
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
      </div>

      <div className="flex justify-between my-2">
        <p className="my-2 font-normal">Specific strike</p>
        <Input className="w-[120px]" />
      </div>

      <div className="flex justify-between my-2">
        <p className="my-2 font-normal">Display</p>
        <div className="flex items-center">
          <Checkbox onChange={onChange}>Calls</Checkbox>
          <Checkbox onChange={onChange}>Puts</Checkbox>
        </div>
      </div>
    </section>
  );
}

export default FilterPopUp;
