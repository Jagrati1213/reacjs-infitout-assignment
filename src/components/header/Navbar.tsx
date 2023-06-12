import React from "react";
import logo from "../../image/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Layout, Row, Col, message, Popover } from "antd";
import MenuList from "./MenuList";
import TradesList from "./TradesList";
import { IconContext } from "react-icons/lib";
import ResponsiveHeader from "./ResponsiveHeader";
const { Header } = Layout;

function Navbar() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, welcome track trades!");
  };
  return (
    <>
      {/* Display on laptop */}
      <Header
        className=" bg-white text-black px-5 border-2 h-[78px] overflow-hidden shadow-md shadow-[rgba(0, 0, 0, 0.12)] xl:block hidden z-10"
        style={{ position: "sticky", top: 0 }}
      >
        <Row
          justify={"space-between"}
          className="h-[73px] items-center flex-wrap"
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
          {/* {contextHolder} */}
          <Popover placement="bottomRight" title="Your Profile" trigger="click">
            <Col
              className="text-sm font-medium flex justify-center items-center cursor-pointer"
              style={{ lineHeight: "0" }}
              onClick={info}
            >
              <p className="mx-1">Profile </p>
              <IconContext.Provider value={{ size: "20px" }}>
                <RiArrowDownSLine />
              </IconContext.Provider>
            </Col>
          </Popover>
        </Row>
      </Header>

      {/* Display on tablet */}
      <ResponsiveHeader />
    </>
  );
}

export default Navbar;
