import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import TableData from "../Data/TableData.json";
import Style from "./style.module.scss";

interface DataType {
  key: React.Key;
  OiBuildup: string;
  IV: number;
  OI: string;
  Volume: string;
  Chng: string;
  LTP: number;
  Strike: number;
  RLTP: number;
  RChng: string;
  RVolume: number;
  ROI: string;
  RIV: number;
  ROiBuildup: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "CALLS",
    children: [
      {
        title: "OI Buildup",
        dataIndex: "OiBuildup",
        width: 130,
      },
      {
        title: "IV",
        dataIndex: "IV",
        width: 70,
      },
      {
        title: "OI",
        dataIndex: "OI",
        width: 70,
      },
      {
        title: "Volume",
        dataIndex: "Volume",
        width: 80,
      },
      {
        title: "Chng%",
        dataIndex: "Chng",
        width: 100,
      },
      {
        title: "LTP",
        dataIndex: "LTP",
        width: 70,
      },
      {
        title: "",
      },
    ],
  },
  {
    title: "",
    children: [
      {
        title: "Strike",
        dataIndex: "Strike",
        width: 130,
      },
    ],
  },
  {
    title: "PUTS",
    children: [
      {
        title: "",
      },

      {
        title: "LTP",
        dataIndex: "RLTP",
        width: 70,
      },
      {
        title: "Chng%",
        dataIndex: "RChng",
        width: 100,
      },
      {
        title: "Volume",
        dataIndex: "RVolume",
        width: 80,
      },
      {
        title: "OI",
        dataIndex: "ROI",
        width: 70,
      },
      {
        title: "IV",
        dataIndex: "RIV",
        width: 70,
      },
      {
        title: "OI Buildup",
        dataIndex: "ROiBuildup",
        width: 130,
      },
    ],
  },
];

const data: DataType[] = [];
TableData.map((ele, i) => {
  data.push({
    key: i,
    OiBuildup: ele.OIBuildup,
    IV: Number(ele.IV),
    OI: ele.OI,
    Volume: ele.Volume,
    Chng: ele.Chng,
    LTP: Number(ele.LTP),
    Strike: Number(ele.Strike),
    RLTP: Number(ele.RLTP),
    RChng: ele.RChng,
    RVolume: Number(ele.RVolume),
    ROI: ele.ROI,
    RIV: Number(ele.RIV),
    ROiBuildup: ele.ROiBuildup,
  });
});
const TableContainer: React.FC = () => (
  <Table
    className={Style.mainContainer}
    bordered
    columns={columns}
    dataSource={data}
    size="middle"
    scroll={{ x: "calc(700px + 50%)", y: 800 }}
  />
);

export default TableContainer;
