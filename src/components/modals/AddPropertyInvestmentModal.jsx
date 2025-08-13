import React, { useState } from 'react';

const disbursementData = Array(95).fill({
  name: 'Kingsley Alhaji',
  email: 'Kingsley@gmail.com',
  phone: '+5897949488',
  bank: 'GTB',
  accountNo: '893793839393',
  investment: 'Cocooland Premium x2',
  amount: '300,000.00',
  date: '08-01-2023',
  status: 'Paid',
});

const Withdrawals = () => {
  const entriesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = disbursementData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const currentEntries = disbursementData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="absolute left-[285px]  my-7 w-[calc(100%-300px)] px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-medium text-[#111827]">Disbursement Portal</div>
        <button className="flex items-center gap-2 text-sm bg-white border border-white shadow px-4 py-2 rounded-full font-medium text-[#00644C]">
          <img src="/export.svg" alt="" className="h-5" /> Export
        </button>
      </div>


      <div className="bg-white shadow-sm rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#f5f7f7] text-[#4B5563]">
            <tr>
              <th className="px-4 py-3 font-medium">S/N</th>

              <th className="px-4 py-3 font-medium">
                <div className="flex items-center gap-1">
                  Investor's Details
                  <img src="/arrow-3.svg" alt="" className="w-3 h-3" />
                </div>
              </th>

              <th className="px-4 py-3 font-medium">Investment Details</th>
              <th className="px-4 py-3 font-medium">Total Amount(₦)</th>

              <th className="px-4 py-3 font-medium">
                <div className="flex items-center gap-1">
                  Vested Date
                  <img src="/arrow-3.svg" alt="" className="w-3 h-3" />
                </div>
              </th>

              <th className="px-4 py-3 font-medium">
                <div className="flex items-center gap-1">
                  Status
                  <img src="/sort.svg" alt="sort icon" className="w-4 h-4" />
                </div>
              </th>

              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#6B7280]">
            {currentEntries.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-12">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <img src="/empty-state-icon.svg" alt="Empty" className="w-16 h-16 opacity-50" />
                    <p className="text-gray-400 text-sm">No disbursement transactions yet.</p>
                  </div>
                </td>
              </tr>
            ) : (
              currentEntries.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">
                    {String((currentPage - 1) * entriesPerPage + index + 1).padStart(2, '0')}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span>{item.name}</span>
                      <span>{item.email}</span>
                      <span>{item.phone}</span>
                      <span>Bank: {item.bank}</span>
                      <span>Account no.: {item.accountNo}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">{item.investment}</td>
                  <td className="px-4 py-4">₦{item.amount}</td>
                  <td className="px-4 py-4">{item.date}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium bg-green-100 px-2.5 py-1 rounded-full">
                      <img src="/verify (1).svg" alt="" /> Paid
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-[#458d7d] bg-white flex items-center gap-2 px-3 rounded-full border border-gray-300 w-[90px] h-[32px] text-sm hover:bg-gray-100">
                      <img src="/History.svg" alt="" className="h-5" />
                      <button>Retry</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-6 text-sm text-gray-500 border-t border-gray-200">
          {/* Left section: entries per page */}
          <div className="flex items-center gap-2">
            <div className="relative border rounded px-2 py-1 flex items-center gap-1">
              <span className="font-semibold text-[#464a51]">{entriesPerPage} Entries</span>
              <span className="text-xs">&#9660;</span>
            </div>
            <span>
              Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
              {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries.
            </span>
          </div>

          {/* Right section: pagination buttons */}
          <div className="flex items-center gap-1">
            <button
              className="px-2 py-1 rounded-md border hover:bg-gray-200"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &#x2039;
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-2 py-1 rounded-md border ${currentPage === page ? "bg-[#111827] text-white" : "hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}

            {totalPages > 4 && (
              <>
                <span className="px-2">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-2 py-1 rounded-md border ${currentPage === totalPages ? "bg-[#111827] text-white" : "hover:bg-gray-100"
                    }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              className="px-2 py-1 rounded-md border hover:bg-gray-200"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &#x203A;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Withdrawals;
