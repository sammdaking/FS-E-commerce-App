import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import { US, TR, SA } from "country-flag-icons/react/3x2"; // Import specific flags

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "TR",
    key: "1",
    icon: <TR height="20px" width="20px" title="Turkish" />,
  },
  {
    label: "EN",
    key: "2",
    icon: <US height="20px" width="20px" title="English" />,
  },
  {
    label: "AR",
    key: "3",
    icon: <SA height="20px" width="20px" title="Arabish" />,
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button className="w-25 ">
        <Space className="text-xs">
          Language
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default App;
