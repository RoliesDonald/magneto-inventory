import React from "react";
import { IconBase } from "react-icons";
import { LuShoppingCart } from "react-icons/lu";

export default function ReactangleSmallCards({ data }) {
  return (
    <div className={`rounded-lg shadow-md text-slate-600 p-4 bg-gray-300 `}>
      <div className="flex space-x-2 w-auto">
        <div className="w-10 h-10 bg-slate-400 rounded-full items-center flex justify-center">
          <div className="md:text-2xl sm:text-base text-2xl text-white">
            {data.icon}
          </div>
        </div>
        <div>
          <h4 className="line-clamp-1">{data.title}</h4>
          <h2 className=" md:text-2xl sm:text-base font-bold">{data.sales}</h2>
        </div>
      </div>
    </div>
  );
}
