/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { US, TR, SA } from "country-flag-icons/react/3x2"; // Import specific flags
import { useTranslation } from "react-i18next";

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [languageName, setLanguageName] = useState<string>("TR");
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e.key);
    i18n.changeLanguage(e.key);
    setLanguageName(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "TR",
      key: "tr",
      icon: <TR height="20px" width="20px" title="Turkish" />,
    },
    {
      label: "EN",
      key: "en",
      icon: <US height="20px" width="20px" title="English" />,
    },
    {
      label: "AR",
      key: "ar",
      icon: <SA height="20px" width="20px" title="Arabish" />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
      <Dropdown menu={menuProps}>
        <Button className="w-20 ">
          <Space className="text-xs">
            {languageName?.toUpperCase()}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};

export default LanguageDropdown;
