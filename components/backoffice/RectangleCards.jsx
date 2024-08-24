import React from "react";
import { LuLayers, LuBarChartHorizontalBig } from "react-icons/lu";
import ReactangleSmallCards from "./ReactangleSmallCards";

export default function RectangleCards() {
  const purchaseStatus = [
    {
      title: "Total Order",
      sales: 150,
      backgrColor: "bg-green-600",
      icon: <LuLayers />,
    },
    {
      title: "Pending",
      sales: 30,
      backgrColor: "bg-red-600",
      icon: <LuBarChartHorizontalBig />,
    },
    {
      title: "On Process",
      sales: 70,
      backgrColor: "bg-blue-600",
      icon: <LuLayers />,
    },
    {
      title: "Done",
      sales: 50,
      backgrColor: "bg-purple-600",
      icon: <LuLayers />,
    },
    {
      title: "Order Last Month",
      sales: 250,
      backgrColor: "bg-gradient-to-r from-red-500 to-blue-500",
      icon: <LuLayers />,
    },
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
      {purchaseStatus.map((items, i) => {
        return <ReactangleSmallCards data={items} key={i} />;
      })}
    </div>
  );
}
