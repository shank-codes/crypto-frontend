"use client";

import { useState } from "react";
import CoinChart from "./CoinChart";

export default function CoinTable({ coins }: { coins: any[] }) {
  const [selected, setSelected] = useState<any>(null);

  if (selected) {
    return <CoinChart coin={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
        <thead className="bg-gray-100 dark:bg-gray-800 text-left">
          <tr>
            <th className="p-2 border-b border-gray-300 dark:border-gray-700">
              #
            </th>
            <th className="p-2 border-b border-gray-300 dark:border-gray-700">
              Name
            </th>
            <th className="p-2 border-b border-gray-300 dark:border-gray-700">
              Price
            </th>
            <th className="p-2 border-b border-gray-300 dark:border-gray-700">
              % Change
            </th>
            <th className="p-2 border-b border-gray-300 dark:border-gray-700">
              Volume
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setSelected(coin)}
            >
              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                {coin.market_cap_rank}
              </td>
              <td className="p-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                />
                {coin.name}
              </td>
              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                ${coin.current_price.toLocaleString()}
              </td>
              <td
                className={`p-2 border-b border-gray-200 dark:border-gray-700 ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                ${coin.total_volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}