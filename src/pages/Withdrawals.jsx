import React from "react";
import { TbArrowsUpDown } from "react-icons/tb";

const Withdrawals = () => {
  const data = [
    {
      sn: "Q1",
      investor: {
        name: "Kingsley Alhoji",
        email: "Kingsley@gmail.com",
        phone: "+5897949488",
        bank: "GTB",
        account: "893798339393",
      },
      investment: "Cocoaland",
      totalAmount: "300,000.00",
      vestedDate: "08-01-2023",
      status: "Paid",
      plan: "Premium x2",
    },
    ...Array(3).fill().map((_, i) => ({
      sn: `Q${i + 2}`,
      investor: {
        name: "Kingsley Alhoji",
        email: "Kingsley@gmail.com",
        phone: "+5897949488",
        bank: "GTB",
        account: "893798339393",
      },
      investment: "Cocoaland",
      totalAmount: "300,000.00",
      vestedDate: "08-01-2023",
      status: "Paid",
      plan: "Premium x2",
    })),
  ];

  const handleExport = () => {
    const headers = [
      "S/N", "Name", "Email", "Phone", "Bank", "Account",
      "Investment", "Plan", "Total Amount", "Vested Date", "Status"
    ];

    const rows = data.map(item => [
      item.sn,
      item.investor.name,
      item.investor.email,
      item.investor.phone,
      item.investor.bank,
      item.investor.account,
      item.investment,
      item.plan,
      item.totalAmount,
      item.vestedDate,
      item.status
    ]);

    const csvContent = [
      headers.join(","), 
      ...rows.map(r => r.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "withdrawals.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="absolute bg-[#EEF2F1] w-full max-w-[980px] top-[72px] left-[282px] px-8 py-6 space-y-6 overflow-y-auto overflow-x-hidden rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Disbursement Portal</h1>
        <button
          onClick={handleExport}
          className="flex items-center gap-2  text-[#00644C] text-sm px-4 py-2 rounded-2xl border bg-white"
        >
          <img src="/export.svg" alt="Export" className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">S/N</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">
                <div className="flex items-center justify-between">
                  <span>Investor's Details</span>
                  <TbArrowsUpDown className="ml-2 text-gray-500" />
                </div>
              </th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Investment Details</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Total Amount (M)</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">
                <div className="flex items-center justify-between">
                  <span>Vested Date</span>
                  <TbArrowsUpDown className="ml-2 text-gray-500" />
                </div>
              </th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Status</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sn} className="border-b border-gray-200 bg-white">
                <td className="py-3 px-4 font-medium whitespace-nowrap">{item.sn}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="font-medium">{item.investor.name}</div>
                  <div className="text-xs text-gray-500">{item.investor.email}</div>
                  <div className="text-xs text-gray-500">{item.investor.phone}</div>
                  <div className="text-xs text-gray-500">Bank: {item.investor.bank}</div>
                  <div className="text-xs text-gray-500">Acct No: {item.investor.account}</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div>{item.investment}</div>
                  <div className="text-xs text-gray-500">{item.plan}</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{item.totalAmount}</td>
                <td className="py-3 px-4 whitespace-nowrap">{item.vestedDate}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full w-fit">
                    <img src="/verify.png" alt="Verified" className="w-4 h-4" />
                    {item.status}
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-[#00644C] text-xs font-semibold rounded-full w-fit border border-green-200">
                    <img src="/History.svg" alt="Retry" className="w-4 h-4" />
                    <span>Retry</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-3 border-t border-gray-300">
        <div className="mb-3 md:mb-0 flex items-center text-gray-600">
          <span>10 Entries</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="mb-3 md:mb-0 text-gray-600">Showing 1 to 10 of 95 entries</div>
        <div className="flex items-center space-x-1">
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded">3</button>
          <span className="px-2">⋯</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded">5</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
