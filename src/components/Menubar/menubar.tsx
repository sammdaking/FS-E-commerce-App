/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
//import menu from "../";

type MenuItem = Required<MenuProps>["items"][number];

const menubar: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState("mail");
  const { t } = useTranslation();

  const items: MenuItem[] = [
    {
      label: t("menu.patient_care_products"), // "Patient Care Products" için çeviri anahtarı
      key: "SubMenu1",
      children: [
        {
          type: "group",
          children: [
            { label: t("menu.toiletries"), key: "setting:1" }, // "Toiletries" için çeviri anahtarı
            { label: t("menu.wound_care_products"), key: "setting:2" }, // "Wound Care Products" için çeviri anahtarı
            { label: t("menu.hygiene_and_cleaning"), key: "setting:3" }, // "Hygiene and Cleaning" için çeviri anahtarı
            { label: t("menu.first_aid_products"), key: "setting:4" }, // "First Aid Products" için çeviri anahtarı
            { label: t("menu.disinfection_products"), key: "setting:5" }, // "Disinfection Products" için çeviri anahtarı
            {
              label: t("menu.hospital_beds_and_accessories"),
              key: "setting:6",
            }, // "Hospital Beds and Accessories" için çeviri anahtarı
            { label: t("menu.adult_diapers"), key: "setting:7" }, // "Adult Diapers" için çeviri anahtarı
            { label: t("menu.air_mattress"), key: "setting:8" }, // "Air Mattress" için çeviri anahtarı
          ],
        },
      ],
    },
    {
      label: t("menu.medical_devices"), // "Medical Devices" için çeviri anahtarı
      key: "SubMenu2",
      children: [
        {
          type: "group",
          children: [
            { label: t("menu.weighing_products"), key: "setting:9" }, // "Weighing Products" için çeviri anahtarı
            { label: t("menu.nebulizer_devices"), key: "setting:10" }, // "Nebulizer Devices" için çeviri anahtarı
            {
              label: t("menu.blood_glucose_monitoring_devices"),
              key: "setting:11",
            }, // "Blood Glucose Monitoring Devices" için çeviri anahtarı
            { label: t("menu.massage_devices"), key: "setting:12" }, // "Massage Devices" için çeviri anahtarı
            { label: t("menu.blood_pressure_monitors"), key: "setting:13" }, // "Blood Pressure Monitors" için çeviri anahtarı
            { label: t("menu.humidifier"), key: "setting:14" }, // "Humidifier" için çeviri anahtarı
            { label: t("menu.oximeter"), key: "setting:15" }, // "Oximeter" için çeviri anahtarı
            { label: t("menu.stethoscope"), key: "setting:16" }, // "Stethoscope" için çeviri anahtarı
            { label: t("menu.oxygen_concentrator"), key: "setting:17" }, // "Oxygen Concentrator" için çeviri anahtarı
          ],
        },
      ],
    },
    {
      label: t("menu.orthopedic_products"), // "Orthopedic Products" için çeviri anahtarı
      key: "SubMenu3",
      children: [
        {
          type: "group",
          children: [
            { label: t("menu.medical_corset"), key: "setting:18" }, // "Medical Corset" için çeviri anahtarı
            { label: t("menu.foot_supports"), key: "setting:19" }, // "Foot Supports" için çeviri anahtarı
            { label: t("menu.cane"), key: "setting:20" }, // "Cane" için çeviri anahtarı
            { label: t("menu.knee_braces"), key: "setting:21" }, // "Knee Braces" için çeviri anahtarı
            { label: t("menu.resting_varicose_stockings"), key: "setting:22" }, // "Resting & Varicose Stockings" için çeviri anahtarı
            { label: t("menu.bathroom_supports"), key: "setting:23" }, // "Bathroom Supports" için çeviri anahtarı
            { label: t("menu.walking_aids"), key: "setting:24" }, // "Walking Aids" için çeviri anahtarı
            { label: t("menu.baby_care_products"), key: "setting:25" }, // "Baby Care Products" için çeviri anahtarı
            { label: t("menu.orthopedic_products_general"), key: "setting:26" }, // "Orthopedic Products" için çeviri anahtarı (genel)
            { label: t("menu.orthopedic_slippers"), key: "setting:27" }, // "Orthopedic Slippers" için çeviri anahtarı
            { label: t("menu.orthopedic_pillows"), key: "setting:28" }, // "Orthopedic Pillows" için çeviri anahtarı
            {
              label: t("menu.orthopedic_pillows_duplicate"),
              key: "setting:29",
            }, // Tekrar eden girdi için farklı bir anahtar
          ],
        },
      ],
    },
    {
      label: "Fizik Tedavi",
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
      label: "Tekerlekli Sandalye",
      key: "SubMenu5",

      children: [
        {
          type: "group",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
    // {
    //   label: "Sarf Malzeme",
    //   key: "SubMenu6",

    //   children: [
    //     {
    //       type: "group",
    //       children: [
    //         { label: "Option 1", key: "setting:1" },
    //         { label: "Option 2", key: "setting:2" },
    //         { label: "Option 3", key: "setting:3" },
    //         { label: "Option 4", key: "setting:4" },
    //       ],
    //     },
    //   ],
    // },
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
      className=""
    />
  );
};

export default menubar;
