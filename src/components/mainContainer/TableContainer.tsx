import React from "react";
import { Button, Space, Table, Tag } from "antd";
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
        width: 60,
      },
      {
        title: "OI",
        dataIndex: "OI",
        width: 60,
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
        width: 60,
      },
      {
        title: " ",
        width: 100,
        render: () => {
          return (
            <Space
              size={[0, "small"]}
              wrap
              className="flex flex-row justify-center"
            >
              <button className="inline bg-[#FFFFFF] border border-[#D0D0D0] hover:bg-[#86C6E6] text-xs px-2 py-[.9px] mr-2">
                B
              </button>
              <button className="inline bg-[#FFFFFF] border border-[#D0D0D0] hover:bg-[#FFA8A8] text-xs px-2 py-[.9px] mr-2">
                S
              </button>
            </Space>
          );
        },
      },
      {
        title: "Strike",
        dataIndex: "Strike",
        width: 100,
      },
    ],
  },
  {
    title: "PUTS",
    children: [
      {
        title: " ",
        width: 100,
        render: () => {
          return (
            <Space
              size={[0, "small"]}
              wrap
              className="flex flex-row justify-center"
            >
              <button className="inline bg-[#FFFFFF] border border-[#D0D0D0] hover:bg-[#86C6E6] text-xs px-2 py-[.9px] mr-2">
                B
              </button>
              <button className="inline bg-[#FFFFFF] border border-[#D0D0D0] hover:bg-[#FFA8A8] text-xs px-2 py-[.9px] mr-2">
                S
              </button>
            </Space>
          );
        },
      },

      {
        title: "LTP",
        dataIndex: "RLTP",
        width: 60,
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
        width: 60,
      },
      {
        title: "IV",
        dataIndex: "RIV",
        width: 60,
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
    columns={columns}
    dataSource={data}
    pagination={false}
    size="middle"
    scroll={{ x: "calc(700px + 50%)" }}
  />
);

export default TableContainer;
