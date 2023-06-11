import React, { useState } from "react";
import { Badge, Button, Col, Layout, Modal, Row, Space } from "antd";
import Style from "./Style.module.scss";
import { Content, Footer, Header } from "antd/es/layout/layout";
import BusketContent from "./BusketContent";
import { PlusCircleOutlined } from "@ant-design/icons";

const BusketPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="ml-2" onClick={showModal}>
        <Badge count={3}>
          <Button
            type={"primary"}
            className="px-10 bg-[#2C57F5] text-white rounded-none"
          >
            Basket
          </Button>
        </Badge>
      </div>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={Style.busketPop}
      >
        <Layout>
          {/* Header of popup */}
          <header style={{ backgroundColor: "#2C57F5" }} className="w-full p-4">
            <Row justify={"space-between"}>
              <Col className="text-white text-sm font-medium">
                <p className="font-normal">Max profit</p>
                <p>24,000/-</p>
              </Col>
              <Col className="text-white text-sm font-medium">
                <p className="font-normal">Max loss</p>
                <p>Unlimited</p>
              </Col>
              <Col className="text-white text-sm font-medium">
                <p className="font-normal">Risk:Reward</p>
                <p>NA</p>
              </Col>
              <Col className="text-white text-sm font-medium">
                <p className="font-normal">Probability</p>
                <p>32%</p>
              </Col>
              <Col className="text-white text-sm font-medium">
                <p className="font-normal">Breakeven</p>
                <p> {`> 38124.2`}</p>
              </Col>
            </Row>
          </header>

          {/* Content of popup */}
          <Content className="bg-white">
            <BusketContent />
          </Content>

          <Footer className="bg-white px-4">
            <Row className="footer" justify={"space-between"} align={"middle"}>
              <Col className="text-sm font-normal">
                <p className="my-1">
                  Margin required: <span className="mx-2">₹ 2,43,630.3</span>
                </p>
                <p className="my-1">
                  Available funds:{" "}
                  <span className="mx-[15px]">₹ 12,00,000,00</span>
                </p>
              </Col>

              <Col>
                <Button className="bg-[#FFD700] border-none rounded-none py-5 flex items-center">
                  <PlusCircleOutlined />
                  <span>Auto hedge</span>
                </Button>
              </Col>

              <Col>
                <Space>
                  <Button
                    onClick={handleCancel}
                    className="rounded-none border-[#2C57F5] text-[#2C57F5] p-5 flex items-center cursor-pointer"
                  >
                    <span>Close basket</span>
                  </Button>
                  <Button
                    onClick={handleOk}
                    className="rounded-none border-[#2C57F5] bg-[#2C57F5] text-white p-5 flex items-center"
                  >
                    <span>Place order</span>
                  </Button>
                </Space>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Modal>
    </>
  );
};

export default BusketPopup;
