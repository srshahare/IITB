import { Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Dash from "../functions/Dash";
import CreateDialog from "./CreateDialog";
import DashDialog from "./DashDialog";
import Home from "./Home";
import Navbar from "./Navbar";
import News from "./News";

const { TabPane } = Tabs;

const Dashboard = () => {
  const {
    openCreateDialog,
    show,
    createPost,
    inputChange,
    image,
    content,
    title,
    handleTabChange,
    showDash,
    closeDash,
    myBlogs,
    logout
  } = Dash();

  return (
    <div>
      <Navbar logout={logout} openCreateDialog={openCreateDialog} openDashDialog={closeDash} />
      <CreateDialog
        image={image}
        title={title}
        content={content}
        createPost={createPost}
        show={show}
        closeDialog={openCreateDialog}
        inputChange={inputChange}
      />
      <DashDialog postList={myBlogs} show={showDash} closeDialog={closeDash} />
      <Tabs
        style={{ background: "white", padding: "0 1rem" }}
        defaultActiveKey="1"
        onChange={handleTabChange}
      >
        <TabPane tab="All Posts" key="1">
          <Home />
        </TabPane>
        <TabPane tab="News" key="2">
          <News />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Dashboard;
