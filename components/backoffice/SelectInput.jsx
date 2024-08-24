import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "",
  options = [],
  multiple = false,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="flex w-full text-sm font-medium leading-6 text-slate-600 dark:text-slate-300"
      >
        {label}
      </label>
      <div className="mt-2 ">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className="flex w-full rounded-lg border-0 py-2 text-slate-600 dark:text-slate-300 dark:bg-slate-700 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id} className="w-1/2">
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
