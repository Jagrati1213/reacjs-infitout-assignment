import { PlusCircleOutlined } from "@ant-design/icons";
import { Table, Tag, InputNumber, Row, Col } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin5Line } from "react-icons/ri";

interface DataType {
  key: string;
  instrument: string;
  bs: string;
  type: string;
  qty: number;
  price: number;
  trigger: number;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Instrument",
    dataIndex: "instrument",
    key: "instrument",
    render: (instrument) => {
      return <p className=" font-medium">{instrument}</p>;
    },
  },
  {
    title: "B/S",
    key: "bs",
    dataIndex: "bs",
    render: (bs) => {
      let color = bs === "S" ? "#FFA8A8" : "#86C6E6";
      return (
        <Tag color={color} key={bs}>
          {bs.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
    render: (type) => {
      return (
        <Tag color={"#2C57F5"} key={type} style={{ color: "white" }}>
          {type.toUpperCase()}
        </Tag>
      );
    },
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
    title: " ",
    key: "sl",
    dataIndex: "sl",
    render: () => {
      return (
        <Row>
          <Col className="flex items-center justify-center text-[#2C57F5]">
            <PlusCircleOutlined />
            <span className="mx-1 font-medium">SL</span>
          </Col>

          <Col className="flex items-center justify-center text-[#2C57F5]">
            <PlusCircleOutlined />
            <span className="mx-1 font-medium">Tgt</span>
          </Col>

          <Col className="flex items-center justify-center mx-2  text-[#D3D3D3] cursor-pointer">
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
    bs: "B",
    type: "MIS",
    qty: 50,
    price: 120.5,
    trigger: 0,
  },
  {
    key: "2",
    instrument: "NIFTY 18MAY23 18200 PE",
    bs: "S",
    type: "NRML",
    qty: 50,
    price: 98.1,
    trigger: 0,
  },
  {
    key: "3",
    instrument: "NIFTY 18MAY23 19200 CE",
    bs: "B",
    type: "MIS",
    qty: 50,
    price: 80.3,
    trigger: 0,
  },
  {
    key: "4",
    instrument: "NIFTY 18MAY23 19200 CE",
    bs: "B",
    type: "MIS",
    qty: 50,
    price: 80.3,
    trigger: 0,
  },
];

const BasketContent: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 100 }}
      pagination={false}
    />
  );
};

export default BasketContent;
