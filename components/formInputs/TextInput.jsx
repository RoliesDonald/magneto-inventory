import React from "react";

export default function TextInput({
  labelTitle,
  name,
  register,
  errors,
  isRequired = true,
  inputType = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-300 mb-2"
      >
        {labelTitle}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required: isRequired })}
          type={inputType}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-lg border-0 py-2 text-gray-600 dark:text-gray-300 shadow-sm dark:bg-slate-700 placeholder:text-slate-400 focus:ring-0 focus:ring-offset-0"
          placeholder={`Type the ${labelTitle.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-redbm-500">
            {labelTitle} is required
          </span>
        )}
      </div>
    </div>
  );
}
