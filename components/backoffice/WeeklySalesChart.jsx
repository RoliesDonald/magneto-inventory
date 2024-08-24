"use client";

import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { mockLineData } from "../mockup/mockData";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js line Chart",
    },
  },
};

export default function WeeklySalesChart() {
  const tabs = [
    { title: "Order", type: "order" },
    { title: "Sales", type: "sales" },
    { title: "Pending", type: "pending" },
  ];

  const [displayChart, setDisplayChart] = useState(tabs[0].type);
  return (
    <div className="bg-gray-300 p-4 rounded-lg divide-y-2 divide-slate-400 shadow-lg">
      <h2 className="text-xl text-slate-500 font-bold mb-3">
        Weekly Sales Chart
      </h2>
      <div className="p-1">
        {/* Tabs */}
        <div className="flex justify-center mb-2 border-b border-gray-700 dark:border-gray-300 ">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#187ee4aault-tab-content"
            role="tablist"
          >
            {tabs.map((tabs, i) => {
              return (
                <li key={i} className="me-2">
                  <button
                    onClick={() => setDisplayChart(tabs.type)}
                    className={
                      displayChart === tabs.type
                        ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                        : "inline-block p-4 text-slate-500 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-blue-500"
                    }
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    aria-current="page"
                  >
                    {tabs.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* DisplayTabs */}
        {tabs.map((tab, i) => {
          if (displayChart === tab.type) {
            return (
              <Line
                options={(options, { maintainAspectRatio: true })}
                data={mockLineData}
                key={i}
                // width={"30%"}
                // height={"15%"}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
