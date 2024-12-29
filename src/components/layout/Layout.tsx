import React, { useState } from "react";
import { Layout, Typography } from "antd";
import { HeadMenu } from "./Header";
import { SideMenu } from "./Sider";
const { Content } = Layout;

export interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  blank?: boolean;
}

export const AppLayout = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <>
      <Layout>
        <HeadMenu blank={props.blank} />
        <Layout style={{ minHeight: "100vh" }}>
          <SideMenu
            onCollapse={(collapse) => {
              setCollapsed(collapse);
            }}
            collapse={collapsed}
          />

          <Layout
            className={props.className}
            style={
              props.blank
                ? { marginLeft: 0 }
                : {
                    marginLeft: collapsed ? 80 : 200,
                  }
            }
          >
            <Content
              style={{
                marginTop: 50,
                padding: "18px 14px",
                minHeight: 360,
              }}
            >
              {props.title && (
                <Typography.Title
                  style={{ color: "white", marginBottom: "1rem" }}
                  level={2}
                >
                  {props.title}
                </Typography.Title>
              )}
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
