"use client";

type TrendData = { date: string; price: number };

export default function TrendMessage({ trendData }: { trendData: any }) {
  const formatted = trendData.map((t: TrendData) => ({
    date: new Date(t.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }), // e.g. "21 Sep"
    fullDate: new Date(t.date).toDateString(), // e.g. "Sun Sep 21 2025"
    price: t.price,
  }));

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl shadow-sm mt-3 border border-gray-200 dark:border-gray-700 w-full overflow-x-auto">
      <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
        📈 {trendData.message}
      </p>
      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
            <th className="p-2 border-b border-gray-300 dark:border-gray-600">
              Date
            </th>
            <th className="p-2 border-b border-gray-300 dark:border-gray-600">
              Price (USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {formatted.map((item: TrendData & { fullDate: string }) => (
            <tr
              key={item.date}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              title={item.fullDate}
            >
              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                {item.date}
              </td>
              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                ${item.price.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
