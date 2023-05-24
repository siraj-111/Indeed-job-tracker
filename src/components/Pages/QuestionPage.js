import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function QuestionPage() {
  const [openTab, setOpenTab] = React.useState(1);
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);

  // const fetchData = async (setData) => {
  //   axios
  //     .get("https://indeedjobsearch.herokuapp.com/questions")
  //     .then((x) => setData(x.data))
  //     .catch((x) => console.log(x));
  // };

  useEffect(() => {
    axios
      .get("https://indeedjobsearch.herokuapp.com/questions")
      .then((x) => {
        setFetching(false);
        setData(x.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data?.questions, fetching, "working and working");

  const [name, setName] = useState("Sadaqat");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <section className="container px-5">
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-5">
          <h1 className="text-4xl font-medium py-5">Question Page</h1>
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-blue-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Known Questions Page
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-blue-600"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Unknown Questions
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="flex flex-col bg-white rounded-lg border-2 shadow-lg p-5">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                              <div className="flex justify-between items-center mb-5">
                                <div className=" xl:w-96 ">
                                  <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                                  >
                                    Search
                                  </label>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 "
                                        fill="none"
                                        strokeLinejoin="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                      </svg>
                                    </div>
                                    <input
                                      type="search"
                                      id="default-search"
                                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="Search"
                                      required
                                    />
                                    <button className="text-white absolute right-2.5 bottom-1 bg-blue-500 hover:bg-blue-600 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 ">
                                      Search
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <table className="min-w-full">
                                <thead className="bg-gray-600 text-white text-center">
                                  <tr className="text-center">
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Type
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Description
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Answer
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {!fetching ? (
                                    data?.questions.map((x, i) => (
                                      <tr className="text-center">
                                        <th
                                          scope="col"
                                          className="text-sm font-medium px-6 py-4"
                                        >
                                          {i}
                                        </th>
                                        <th
                                          scope="col"
                                          className="text-sm font-light px-6 py-4"
                                        >
                                          {x.questions}
                                        </th>
                                        <th
                                          scope="col"
                                          className="text-sm font-light px-6 py-4"
                                        >
                                          {x.answers}
                                        </th>
                                        <th
                                          scope="col"
                                          className="text-sm font-light px-6 py-4"
                                        >
                                          Action
                                        </th>
                                      </tr>
                                    ))
                                  ) : (
                                    <h3 className="text-center">Loading</h3>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div className="flex flex-col bg-white rounded-lg border-2 shadow-lg p-5">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                              <div className="flex justify-between items-center mb-5">
                                <div className=" xl:w-96 ">
                                  <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                                  >
                                    Search
                                  </label>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 "
                                        fill="none"
                                        strokeLinejoin="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                      </svg>
                                    </div>
                                    <input
                                      type="search"
                                      id="default-search"
                                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="Search"
                                      required
                                    />
                                    <button className="text-white absolute right-2.5 bottom-1 bg-blue-500 hover:bg-blue-600 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 ">
                                      Search
                                    </button>
                                  </div>
                                </div>
                                <Link to="/addReceivedData">
                                  <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Add Received Details
                                  </button>
                                </Link>
                              </div>
                              <table className="min-w-full">
                                <thead className="bg-gray-600 text-white text-center">
                                  <tr className="text-center">
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Type
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Description
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Question Answer
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium px-6 py-4"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b hover:bg-gray-100 text-center">
                                    <td className="text-sm text-gray-500 font-black px-6 py-4 whitespace-nowrap">
                                      Blank
                                    </td>
                                    <td className="text-sm text-gray-500 font-black px-6 py-4 whitespace-nowrap">
                                      What is your Name?
                                    </td>
                                    <td className="text-sm text-gray-500 font-black px-6 py-4 whitespace-nowrap">
                                      <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        className="border rounded-lg px-3 py-2"
                                      />
                                    </td>
                                    <td className="px-6 py-4">
                                      <button
                                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        onClick={handleSubmit}
                                      >
                                        Submit
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
