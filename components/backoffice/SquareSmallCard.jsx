import React from "react";

export default function SquareSmallCard({ data }) {
  return (
    <div
      className={`rounded-lg p-6 shadow-[0_9px_7px_-6px_rgba(0,0,0,0.3)] text-white flex items-center flex-col gap-2 ${data.backgrColor} `}
    >
      <div className="text-3xl">{data.icon}</div>
      <h4>{data.title}</h4>
      <h2 className="md:text-2xl sm:text-2xl font-bold">Rp. {data.sales}</h2>
    </div>
  );
}
