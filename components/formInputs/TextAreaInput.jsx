"use client";
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(name, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full rounded-lg border-0 py-2 text-gray-600 dark:text-gray-300 shadow-sm dark:bg-slate-700 placeholder:text-slate-400 focus:ring-0 focus:ring-offset-0"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
