// components/ApplicationSales.tsx
'use client';

interface TableData {
  application: string;
  sales: string;
  change: number;
  avgPrice: string;
  total: string;
  subtitle: string;
}

export default function Appsalescard() {
  const tableData: TableData[] = [
    {
      application: "Able Pro",
      sales: "16,300",
      change: 553,
      avgPrice: "$515,652",
      total: "$515,652",
      subtitle: "Powerful Admin Theme",
    },
    {
      application: "Photoshop",
      sales: "26,421",
      change: 535,
      avgPrice: "$518,785",
      total: "$518,785",
      subtitle: "Design Software",
    },
    {
      application: "Guruable",
      sales: "8,265",
      change: 598,
      avgPrice: "$59,652",
      total: "$59,652",
      subtitle: "Best Admin Template",
    },
    {
      application: "Flatable",
      sales: "10,652",
      change: 520,
      avgPrice: "$57,856",
      total: "$57,856",
      subtitle: "Admin App",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm mb-3">
      <h2 className="text-xl font-semibold mb-6">Application Sales</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50">
            <tr>
              {["Application", "Sales", "Change", "Avg Price", "Total"].map((header) => (
                <th 
                  key={header} 
                  className="text-left py-3 px-4 font-medium text-gray-500 border-b"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {tableData.map((row, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4 border-b">
                  <div>
                    <div className="font-medium">{row.application}</div>
                    <div className="text-sm text-gray-500">{row.subtitle}</div>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">{row.sales}</td>
                <td className="py-4 px-4 border-b">
                  <span className={`text-${row.change >= 0 ? 'green' : 'red'}-600`}>
                    {row.change >= 0 ? '+' : '-'}{Math.abs(row.change)}%
                  </span>
                </td>
                <td className="py-4 px-4 border-b">{row.avgPrice}</td>
                <td className="py-4 px-4 border-b font-semibold">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          View all Projects
        </button>
      </div>
    </div>
  );
}