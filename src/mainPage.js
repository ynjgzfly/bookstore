import React from "react";
import "antd/dist/antd.css";
import BookLists from "./bookLists";
import { Card, Layout } from "antd";
import SideBar from "./sideBar";

const { Header, Content, Footer } = Layout;
function MainPage() {
  return (
    <div>
      <Layout className={"layout"}>
        <SideBar />
        <Content style={{ padding: "0 50px" }}>
          <BookLists />
        </Content>
      </Layout>
    </div>
  );
}

export default MainPage;
