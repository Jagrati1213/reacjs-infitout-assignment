import React from "react";
import { Layout } from "antd";
import Navbar from "./components/header/Navbar";
import ContainerHeader from "./components/mainContainer/ContainerHeader";
import TableContainer from "./components/mainContainer/TableContainer";
const { Footer, Content } = Layout;
const App: React.FC = () => (
  <div className="App">
    <Layout className="xl:container mx-auto">
      <Navbar />
      <Content className="pt-6 bg-red-200 container mx-auto lg:px-14">
        <ContainerHeader />
        <TableContainer />
      </Content>
    </Layout>
  </div>
);

export default App;
