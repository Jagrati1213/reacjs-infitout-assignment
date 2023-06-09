import React, { useState } from "react";
import { Button, Col, Drawer, Row } from "antd";
import logo from "../../image/tracktrades_logo.svg";
import MenuList from "./MenuList";
import { MenuFoldOutlined } from "@ant-design/icons";

function ResponsiveHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <section
      className="xl:hidden block z-10"
      style={{ position: "sticky", top: 0 }}
    >
      <Row
        justify={"space-between"}
        className="bg-white text-black px-5 border-2  shadow-md h-[73px] items-center flex-wrap"
      >
        <Col className="mx-3 p-1">
          <img src={logo} alt="logo" className="w-full object-cover" />
        </Col>
        <Col>
          <Button onClick={showDrawer}>
            <MenuFoldOutlined />
          </Button>
        </Col>
      </Row>

      <Drawer
        title="Track Trades"
        placement="right"
        onClose={onClose}
        open={open}
        className={`bg-white z-10 xl:hidden block`}
      >
        <Row
          justify={"space-evenly"}
          className="flex-wrap flex-col items-start pl-3"
        >
          <Col span={24}>
            <MenuList />
          </Col>
        </Row>
      </Drawer>
    </section>
  );
}

export default ResponsiveHeader;
