import React from "react";

const Investment = () => {
  const orders = [
    {
      sn: "01",
      orderId: "090388982",
      descriptions: [
        "Coco land - Platinum X2",
        "Coco land - Gold X2",
        "Coco land - Gold X2",
      ],
      investorName: "Kingsley Alhoji",
      amount: "500,000.00",
      date: "08-01-2023",
      status: "Successful",
    },
    {
      sn: "02",
      orderId: "090388983",
      descriptions: [
        "Coco land - Platinum X2",
        "Coco land - Gold X2",
        "Coco land - Gold X2",
      ],
      investorName: "Kingsley Alhoji",
      amount: "500,000.00",
      date: "08-01-2023",
      status: "Successful",
    },
    {
      sn: "03",
      orderId: "090388984",
      descriptions: [
        "Coco land - Platinum X2",
        "Coco land - Gold X2",
        "Coco land - Gold X2",
      ],
      investorName: "Kingsley Alhoji",
      amount: "500,000.00",
      date: "08-01-2023",
      status: "Failed",
    },
  ];

  return (
    <div className="absolute bg-[#EEF2F1] w-full max-w-[982px] top-[72px] left-[282px] px-12 py-6 space-y-6 overflow-y-auto overflow-x-hidden rounded-lg shadow">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">Cocoa Land</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex gap-2 rounded-full bg-white w-fit px-4 py-2 items-center">
            <img src="/export.svg" alt="export" className="w-5 h-5" />
            <button className="">Edit Property</button>
          </div>
          <button className="rounded-full bg-[#eacccc] px-4 py-2">
            Un-publish Investment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-t-4xl">
        <div className="">
          <img
            src="/Frame 1618873004.png"
            alt="Overview Banner"
            className="w-full h-auto rounded-t-4xl"
          />
        </div>
        {/* Header */}
        <header className=" pt-4 rounded-lg">
          <nav className="mt-4 mx-4 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            {[
              "Overview",
              "Investors",
              "Disbursement Transaction",
              "Orders",
              "About Investment Property",
            ].map((tab, i) => (
              <span
                key={i}
                className={`cursor-pointer rounded-full px-4 py-2 ${
                  i === 0
                    ? "bg-[#E5FAF9]"
                    : "hover:text-gray-900 border-gray-200 border "
                }`}
              >
                {tab}
              </span>
            ))}
          </nav>
        </header>

        {/* Investment Progress Dropdown Title */}
        <div className="p-4 ">
          <label
            htmlFor="progress"
            className="block text-sm mb-2 text-gray-700"
          ></label>
          <select
            id="progress"
            className="border border-gray-200 text-sm rounded-md p-2 focus:outline-none"
          >
            <option>Investment progress</option>
          </select>
        </div>

        {/* Investment Progress Section */}
        <section className="border-gray-200 border rounded-lg p-4 mx-4">
          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-700 font-medium">
              Investment Progress
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-[#DCA332] h-4 w-[58%] rounded-l-full"></div>
            </div>

            <div className="flex justify-between text-xs text-gray-700 font-medium mt-2">
              <div>Total sold: 2,000,000,000.00</div>
              <div>No. of Investors: 102</div>
              <div className="text-gray-500 text-xs">64% completed</div>
            </div>
          </div>
        </section>
        <div className="mx-4 my-5">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            Latest Orders
          </h2>
        </div>
        {/* Latest Orders */}
        <section className="bg-white p-4 rounded-lg border-gray-200 border  mx-4 mt-[24px]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#FAFBFB]">
                <tr>
                  {[
                    "S/N",
                    "Order ID",
                    "Description",
                    "Investor's name",
                    "Amount (₦)",
                    "Date",
                    "Status",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 align-top font-medium"
                      >
                        {order.sn}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 text-gray-500 align-top"
                      >
                        {order.orderId}
                      </td>
                      <td className="px-4 py-4 text-gray-500">
                        {order.descriptions[0]}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 text-gray-500 align-top"
                      >
                        {order.investorName}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 text-gray-500 align-top"
                      >
                        {order.amount}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 text-gray-500 align-top"
                      >
                        {order.date}
                      </td>
                      <td
                        rowSpan={order.descriptions.length}
                        className="px-4 py-4 align-top"
                      >
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            order.status === "Successful"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                    {order.descriptions.slice(1).map((desc, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4 text-gray-500">{desc}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investment;
