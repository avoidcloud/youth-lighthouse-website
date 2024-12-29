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
import { Avatar, Flex, Layout, Menu, message, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  collapse: boolean;
  onCollapse: (c: boolean) => void;
}

export const SideMenu = (props: Props) => {
  const router = useRouter();

  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={props.collapse}
      onCollapse={props.onCollapse}
      style={{
        overflow: "auto",
        overflowX: "scroll",
        height: "calc(100vh - 50px)",
        position: "fixed",
        left: 0,
        top: "50px",
        width: 230,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Flex
        style={{ flexDirection: "column", height: "100%" }}
        justify="space-between"
      >
        <Menu
          onChange={() => {
            message.info("not implemented");
          }}
          style={{
            marginTop: "0.5rem",
            fontWeight: "bold",
            fontSize: "0.7rem",
            maxHeight: "92%",
            overflowY: "scroll",
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          defaultOpenKeys={[router.pathname]}
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
        <Flex justify="center">
          <Space align="center">
            <Avatar
              size={20}
              shape="square"
              alt="logo"
              src={"https://avatars.githubusercontent.com/u/27845305?s=200&v=4"}
            />
            <strong>Admin</strong>
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  );
};
