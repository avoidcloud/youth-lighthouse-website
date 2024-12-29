import { LoadingOutlined } from "@ant-design/icons";
import { ConfigProvider, Spin } from "antd";

interface Props {
  children?: React.ReactNode;
}

export const AppThemeProvider = (props: Props) => {
  return (
    <ConfigProvider pagination={AppPagination} theme={AppTheme}>
      {props.children}
    </ConfigProvider>
  );
};

Spin.setDefaultIndicator(<LoadingOutlined spin />);

export const AppPagination = { showSizeChanger: true };

export const AppTheme = {
  token: {
    colorBgLayout: "linear-gradient(#5B738B, #F2F4F8)",
  },
  components: {
    Spin: {
      dotSize: 40,
      dotSizeSM: 20,
      dotSizeLG: 55,
    },
  },
};
