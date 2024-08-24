"use client";
import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, plugins } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { mockPieData } from "../mockup/mockData";

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        potition: "bottom",
      },
    },
    title: {
      display: true,
      text: "Chart.js line Chart",
    },
  },
};

export default function BestSelling() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg divide-y-2 divide-slate-400 shadow-lg">
      <h2 className="text-xl text-slate-500 font-bold mb-3">
        Best Selling Item
      </h2>
      <div
        className="p-4 flex justify-center h-96
      "
      >
        <Pie
          data={mockPieData}
          width={"30%"}
          height={"30%"}
          options={(options, { maintainAspectRatio: true })}
        />
      </div>
    </div>
  );
}
