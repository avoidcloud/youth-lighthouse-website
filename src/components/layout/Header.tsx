"use client";

import {
  AccountBookOutlined,
  CalculatorOutlined,
  DashboardOutlined,
  FileDoneOutlined,
  PartitionOutlined,
  ProductOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, message, Space } from "antd";
import Link from "next/link";

export const HeadMenu = () => {
  return (
    <header
      style={{
        height: "50px",
        background: "white",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ lineHeight: "100%" }}>
          <Space align="center">
            <Avatar
              size={40}
              shape="square"
              alt="logo"
              src={"https://avatars.githubusercontent.com/u/27845305?s=200&v=4"}
            />
          </Space>
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          onChange={() => {
            message.info("not implemented");
          }}
          items={[
            {
              label: <Link href={"/dashboard"}>Dashboard</Link>,
              key: "/dashboard",
              icon: <DashboardOutlined />,
            },
            {
              label: "Business Partners",
              key: "/bp",
              icon: <PartitionOutlined />,
              children: [
                {
                  label: "Customers",
                  key: "/bp/customers",
                  icon: <PartitionOutlined />,
                },
                {
                  label: "Suppliers",
                  key: "/bp/suppliers",
                  icon: <PartitionOutlined />,
                },
              ],
            },
            {
              label: "Supplier Chain",
              icon: <ProductOutlined />,
              key: "/sp",
              children: [
                {
                  label: <Link href={"/products"}>Products</Link>,
                  key: "/products",
                  icon: <ProductOutlined />,
                },
                {
                  label: <Link href={"/purchase"}>Purchase Order</Link>,
                  key: "/purchase",
                  icon: <ReconciliationOutlined />,
                },
                {
                  label: <Link href={"/sales"}>Sales Orders</Link>,
                  key: "/sales",
                  icon: <ShoppingCartOutlined />,
                },
              ],
            },
            {
              label: "Finance",
              icon: <ProductOutlined />,
              key: "/fi",
              children: [
                {
                  label: <Link href={"/fi/ledgers"}>Ledger Book</Link>,
                  key: "/fi/ledgers",
                  icon: <AccountBookOutlined />,
                },
                {
                  label: <Link href={"/fi/posting"}>Financial Posting</Link>,
                  key: "/fi/posting",
                  icon: <CalculatorOutlined />,
                },
                {
                  label: <Link href={"/fi/transactions"}>Transactions</Link>,
                  key: "/fi/transactions",
                  icon: <TransactionOutlined />,
                },
                {
                  label: <Link href={"/fi/reports"}>Reports</Link>,
                  key: "/fi/reports",
                  icon: <FileDoneOutlined />,
                },
              ],
            },
            {
              label: <Link href={"/management"}>Management</Link>,
              key: "/management",
              icon: <SettingOutlined />,
            },
          ]}
        />
        <Space>
          <Link href="/login">
            <Button type="primary" size="small">
              Login
            </Button>
          </Link>
          <Link href="/logout">
            <Button size="small" type="primary" danger>
              Logout
            </Button>
          </Link>
        </Space>
      </div>
    </header>
  );
};
