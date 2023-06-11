import React from "react";
import logo from "../../image/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Layout, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";
import ProfileList from "./ProfileList";
import { IconContext } from "react-icons/lib";
import ResponsiveHeader from "./ResponsiveHeader";
const { Header } = Layout;

function Navbar() {
  return (
    <>
      <Header className=" bg-white text-black px-5 border-2  h-[78px] overflow-hidden shadow-md xl:block hidden z-10">
        <Row
          justify={"space-between"}
          className="h-[73px] items-center flex-wrap"
        >
          <Col className="mx-3 p-1">
            <img src={logo} alt="logo" className="w-full object-cover" />
          </Col>

          <Col xl={{ span: 8 }}>
            <MenuList />
          </Col>

          <Col span={7}>
            <ProfileList />
          </Col>

          <Col
            className="text-sm font-medium flex justify-center items-center cursor-pointer"
            style={{ lineHeight: "0" }}
          >
            <p className="mx-1">Profile </p>

            <IconContext.Provider value={{ size: "20px" }}>
              <RiArrowDownSLine />
            </IconContext.Provider>
          </Col>
        </Row>
      </Header>
      <ResponsiveHeader />
    </>
  );
}

export default Navbar;
