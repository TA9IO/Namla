import React from "react";
import { FaSitemap } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import { BiDevices } from "react-icons/bi";

const fatherRoute = '/Home'
export const SideBarData = [
  {
    name: "Clusters",
    path: `${fatherRoute}/Clusters`,
    icon: <FaSitemap />,
  },

  {
    name: "Edge",
    path: `${fatherRoute}/Edge`,
    icon: <AiFillCloud />,
  },
  {
    name: "Devices",
    path: `${fatherRoute}/Devices`,
    icon: <BiDevices />,
  },
];
