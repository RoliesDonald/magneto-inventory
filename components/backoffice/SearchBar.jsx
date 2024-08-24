import React from "react";

export default function SearchBar({ title }) {
  return (
    <div className="w-auto sm:auto">
      <label htmlFor="table-search" className="sr-only">
        {title}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="block ps-10 text-sm text-gray-900  rounded-lg w-full sm:w-80 bg-gray-50  dark:bg-indigo-950/60  dark:placeholder-gray-400 dark:text-white"
          placeholder="Search for items"
        />
      </div>
    </div>
  );
}
