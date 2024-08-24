import React from "react";
import SquareSmallCard from "./SquareSmallCard";
import { LuLayers, LuBarChartHorizontalBig } from "react-icons/lu";

export default function SquareCards() {
  const orderStatus = [
    {
      title: "Today",
      sales: 10000,
      backgrColor: "bg-gradient-to-b from-blue-400 to-blue-600",
      icon: <LuLayers />,
    },
    {
      title: "Yesterday",
      sales: 10000,
      backgrColor: "bg-gradient-to-b from-red-400 to-red-600",
      icon: <LuBarChartHorizontalBig />,
    },
    {
      title: "This Month",
      sales: 10000,
      backgrColor: "bg-gradient-to-b from-green-400 to-green-600",
      icon: <LuLayers />,
    },
    {
      title: "last",
      sales: 10000,
      backgrColor: "bg-gradient-to-b from-purple-400 to-purple-600",
      icon: <LuLayers />,
    },
    {
      title: "last",
      sales: 10000,
      backgrColor: "bg-gradient-to-b from-cyan-400 to-cyan-600",
      icon: <LuLayers />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
      {orderStatus.map((item, i) => {
        return <SquareSmallCard className="bg-green-200" data={item} key={i} />;
      })}
    </div>
  );
}
