import React, { useState } from "react";
import { Layout, Menu, Breadcrumb  } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminMain = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { push } = useHistory();
  //  state = {
  //   collapsed: false,
  // }
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

  return (
    <Layout id="components-layout-demo-side" style={{ minHeight: "100vh" }}>
      {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Menu
          theme="dark"
          onClick={({key}) => {
          // console.log(key)
            push(key);
          }}
          defaultSelectedKeys={["1"]}
          mode="inline "
        >
          <Menu.Item key="/admin/categories/list" icon={<PieChartOutlined />}>
            商品分类
          </Menu.Item>
          <Menu.Item key="/admin/products/list" icon={<DesktopOutlined />}>
            商品信息
          </Menu.Item>
          <Menu.Item key="/admin/users/list" icon={<FileOutlined />}>
            会员信息
          </Menu.Item>
          <Menu.Item key="/admin/ordres/list" icon={<FileOutlined />}>
            订单列表
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminMain;
