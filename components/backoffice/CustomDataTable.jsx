"use client";
import React, { useState } from "react";
import { mockProduct } from "../mockup/mockData";

export default function CustomDataTable() {
  const data = mockProduct;

  const PAGE_SIZE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentDisplayData = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / PAGE_SIZE);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);
  // const numberOfPages =

  function handlePageChange(page) {
    console.log(page);
  }

  return (
    <div className="p-4 rounded-lg bg-gray-300 shadow-md">
      <h2 className="text-xl text-slate-500 font-bold mb-3">Recent Order</h2>
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkBox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-ellipsis overflow-hidden whitespace-nowrap w-2"
              >
                No
              </th>
              <th scope="col">
                <div className="text-ellipsis overflow-hidden whitespace-nowrap w-20 lg:w-40">
                  Product name
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Part No.
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Sale
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDisplayData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-slate-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-2">
                      {item.id}
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-20 lg:w-40">
                      {item.product_name}
                    </div>
                  </th>
                  <td className="px-3 py-4">
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-20 lg:w-40">
                      {item.part_number}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-20 lg:w-40">
                      {item.category}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-20 lg:w-40">
                      {item.price}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-10 lg:w-40">
                      {item.sale}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav
          className="flex w-full items-center justify-between p-4 dark:bg-gray-700"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {itemStartIndex}-{itemEndIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: pageCount }, (_, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    disabled={currentPage === index + 1}
                    className={
                      currentPage == index + 1
                        ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-100 bg-blue-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-blue-400 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-blue-700 dark:hover:text-white"
                        : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
