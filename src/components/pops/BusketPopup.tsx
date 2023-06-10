import React, { useState } from "react";
import { Badge, Button, Modal } from "antd";

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
          <button className="px-10 py-3 bg-[#2C57F5] text-white">Basket</button>
        </Badge>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default BusketPopup;
