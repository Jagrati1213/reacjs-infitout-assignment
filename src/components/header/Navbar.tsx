import React from "react";
import logo from "../../image/tracktrades_logo.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { Layout, Row, Col, Popover, Dropdown, MenuProps } from "antd";
import MenuList from "./MenuList";
import TradesList from "./TradesList";
import { IconContext } from "react-icons/lib";
import ResponsiveHeader from "./ResponsiveHeader";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    label: "User Name",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Settings",
    key: "2",
    icon: <SettingOutlined />,
  },
];

function Navbar() {
  return (
    <>
      {/* Display on laptop */}
      <Header
        className=" bg-white text-black px-5 border-2 h-[68px] overflow-hidden shadow-md shadow-[rgba(0, 0, 0, 0.12)] xl:block hidden z-10"
        style={{ position: "sticky", top: 0 }}
      >
        <Row
          justify={"space-between"}
          className="h-[63px] items-center flex-wrap"
        >
          {/* Logo */}
          <Col className="mx-3 p-1">
            <img src={logo} alt="logo" className="w-full object-cover" />
          </Col>

          {/* Menu List */}
          <Col xl={{ span: 8 }}>
            <MenuList />
          </Col>

          {/* Trades List */}
          <Col span={7}>
            <TradesList />
          </Col>

          {/* Profile icon */}
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Col
              className="text-sm font-medium flex justify-center items-center cursor-pointer"
              style={{ lineHeight: "0", fontFamily: `'Satoshi', sans-serif` }}
            >
              <p className="mx-1">Profile </p>
              <IconContext.Provider value={{ size: "20px", color: "#14142B" }}>
                <RiArrowDownSLine />
              </IconContext.Provider>
            </Col>
          </Dropdown>
        </Row>
      </Header>

      {/* Display on tablet to mobile */}
      <ResponsiveHeader />
    </>
  );
}

export default Navbar;
