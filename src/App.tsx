import React from "react";
import { Layout } from "antd";
import Navbar from "./components/header/Navbar";
import ContainerHeader from "./components/mainContainer/ContainerHeader";
import TableContainer from "./components/mainContainer/TableContainer";
const { Footer, Content } = Layout;
const App: React.FC = () => (
  <div className="App">
    <Layout>
      <Navbar />
      <Content className="pt-6 bg-white xl:container w-full xl:mx-auto xl:px-14 px-5">
        <ContainerHeader />
        <TableContainer />
      </Content>
    </Layout>
  </div>
);

export default App;
