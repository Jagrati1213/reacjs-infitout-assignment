import { PlusCircleOutlined } from "@ant-design/icons";
import { Table, Tag, InputNumber, Row, Col } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin5Line } from "react-icons/ri";

interface DataType {
  key: string;
  instrument: string;
  bs: string[];
  type: string[];
  qty: number;
  price: number;
  trigger: number;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Instrument",
    dataIndex: "instrument",
    key: "instrument",
  },
  {
    title: "B/S",
    key: "bs",
    dataIndex: "bs",
    render: (_, { bs }) => (
      <>
        {bs.map((ele) => {
          let color = ele === "S" ? "#FFA8A8" : "#86C6E6";
          return (
            <Tag color={color} key={ele}>
              {ele.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
    render: (_, { type }) => (
      <>
        {type.map((ele) => {
          let color = "#2C57F5";
          return (
            <Tag color={color} key={ele} style={{ color: "white" }}>
              {ele.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
    render: (qty) => {
      return <InputNumber value={qty} className="rounded-none" />;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => {
      return <InputNumber value={price} className="rounded-none" />;
    },
  },
  {
    title: "Trigger",
    dataIndex: "trigger",
    key: "trigger",
    render: (trigger) => {
      return <InputNumber value={trigger} className="rounded-none" />;
    },
  },
  {
    title: "",
    key: "sl",
    dataIndex: "sl",
    render: () => {
      return (
        <Row>
          <Col className="flex items-center justify-center text-[#2C57F5]">
            <PlusCircleOutlined />
            <span className="mx-1">SL</span>
          </Col>

          <Col className="flex items-center justify-center text-[#2C57F5]">
            <PlusCircleOutlined />
            <span className="mx-1">Tgt</span>
          </Col>

          <Col className="flex items-center justify-center mx-2  text-[#bababa] cursor-pointer">
            <IconContext.Provider value={{ size: "17px" }}>
              <RiDeleteBin5Line />
            </IconContext.Provider>
          </Col>
        </Row>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    instrument: "NIFTY 18MAY23 18200 CE",
    bs: ["B"],
    type: ["MIS"],
    qty: 50,
    price: 120.5,
    trigger: 0,
  },
  {
    key: "2",
    instrument: "NIFTY 18MAY23 18200 PE",
    bs: ["S"],
    type: ["NRML"],
    qty: 50,
    price: 98.1,
    trigger: 0,
  },
  {
    key: "3",
    instrument: "NIFTY 18MAY23 19200 CE",
    bs: ["B"],
    type: ["MIS"],
    qty: 50,
    price: 80.3,
    trigger: 0,
  },
];

const BusketContent: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default BusketContent;
