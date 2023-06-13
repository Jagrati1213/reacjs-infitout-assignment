import React from "react";
import { Layout } from "antd";
import Navbar from "./components/header/Navbar";
import ContainerHeader from "./components/mainContainer/ContainerHeader";
import TableContainer from "./components/mainContainer/TableContainer";
const { Content } = Layout;
const App: React.FC = () => (
  <div className="App">
    <Layout className="bg-[#FBFBFB]">
      <Navbar />
      <Content className="2xl:container w-full xl:mx-auto 2xl:px-0 px-8 md:mt-0 mt-3">
        <ContainerHeader />
        <TableContainer />
      </Content>
    </Layout>
  </div>
);

export default App;
