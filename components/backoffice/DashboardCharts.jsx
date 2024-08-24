import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSelling from "./BestSelling";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSelling />
    </div>
  );
}
