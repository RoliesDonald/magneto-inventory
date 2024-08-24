import React from "react";

export default function PageTitleHeading({ title }) {
  return (
    <div>
      <h2 className="w-auto px-3 py-1 dark:text-slate-300 text-slate-500 text-md font-medium rounded-lg ">
        {title}
      </h2>
    </div>
  );
}
