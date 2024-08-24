import CustomDataTable from "@/components/backoffice/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import PageTitleHeading from "@/components/backoffice/PageTitleHeading";
import RectangleCards from "@/components/backoffice/RectangleCards";
import SquareCards from "@/components/backoffice/SquareCards";
import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-4 ">
      <PageTitleHeading title="Dashboard" />
      {/* Cards square */}
      <SquareCards />
      {/* Cards rectangle */}
      <RectangleCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Order Table */}
      <CustomDataTable />
    </div>
  );
}
