/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";

type MenuItem = Required<MenuProps>["items"][number];

const menubar: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState("mail");
  const { t } = useTranslation();

  const items: MenuItem[] = [
    {
      label: t("navbar.Discounted_Products"),
      key: "SubMenu7",
    },
    {
      label: t("navbar.Patient_Care_Products"), // Patient Care Products
      key: "SubMenu1",
      children: [
        {
          type: "group",
          children: [
            { label: t("navbar.Toiletries"), key: "setting:1" }, // Toilettries
            { label: t("navbar.Wound_Care_Products"), key: "setting:2" }, // Wound Care Products
            { label: t("navbar.Hygiene_and_Cleaning"), key: "setting:3" }, // Hygiene And Cleaning
            { label: t("navbar.First_Aid_Products"), key: "setting:4" }, // First Aid Products
            { label: t("navbar.Disinfection_Products"), key: "setting:5" }, // Disinfection Products
            {
              label: t("navbar.Hospital_Beds_and_Accessories"),
              key: "setting:6",
            }, // Hospital Beds And Accessories
            { label: t("navbar.Adult_Diapers"), key: "setting:7" }, // Adult Diapers
            { label: t("navbar.Air_Mattress"), key: "setting:8" }, // Air Mattress
          ],
        },
      ],
    },
    {
      label: t("navbar.Medical_Devices"), // Medical Devices
      key: "SubMenu2",
      children: [
        {
          type: "group",
          children: [
            { label: t("navbar.Weighing_Products"), key: "setting:9" }, // Weighing Products
            { label: t("navbar.Nebulizer_Devices"), key: "setting:10" }, // Nebulizer Devices
            {
              label: t("navbar.Blood_Glucose_Monitoring_Devices"),
              key: "setting:11",
            }, // Blood Glucose Monitoring Devices
            { label: t("navbar.Massage_Devices"), key: "setting:12" }, // Massage Devices
            { label: t("navbar.Blood_Pressure_Monitors"), key: "setting:13" }, // Blood Pressure Monitors
            { label: t("navbar.Humidifier"), key: "setting:14" }, // Humidifier
            { label: t("navbar.Oximeter"), key: "setting:15" }, // Oximeter
            { label: t("navbar.Stethoscope"), key: "setting:16" }, // Stethoscope
            { label: t("navbar.Oxygen_Concentrator"), key: "setting:17" }, // Oxygen Concentrator
          ],
        },
      ],
    },
    {
      label: t("navbar.Orthopedic_Products"), // Orthopedic Products
      key: "SubMenu3",
      children: [
        {
          type: "group",
          children: [
            { label: t("navbar.Medical_Corset"), key: "setting:18" }, // Medical Corset
            { label: t("navbar.Foot_Supports"), key: "setting:19" }, // Foot Supports
            { label: t("navbar.Cane"), key: "setting:20" }, // Cane
            { label: t("navbar.Knee_Braces"), key: "setting:21" }, // Knee Braces
            {
              label: t("navbar.Resting_Varicose_Stockings"),
              key: "setting:22",
            }, // Resting Varicose Stockings
            { label: t("navbar.Bathroom_Supports"), key: "setting:23" }, // Bathroom Supports
            { label: t("navbar.Walking_Aids"), key: "setting:24" }, // Walking Aids
            { label: t("navbar.Baby_Care_Products"), key: "setting:25" }, // Baby Care Products
            { label: t("navbar.Orthopedic_Slippers"), key: "setting:27" }, // Orthopedic Slippers
            { label: t("navbar.Orthopedic_Pillows"), key: "setting:28" }, // Orthopedic Pillows
          ],
        },
      ],
    },
    {
      label: t("navbar.Physiotherapy"),
      key: "SubMenu4",

      children: [
        {
          type: "group",
          children: [
            { label: "Tens Cihazı", key: "setting:30" },
            { label: "Option 2", key: "setting:2" },
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },

    {
      label: t("navbar.Wheelchair"),
      key: "SubMenu5",
    },

    {
      label: t("navbar.Massage_Equipment"),
      key: "SubMenu6",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="w-full flex justify-evenly"
    />
  );
};

export default menubar;
