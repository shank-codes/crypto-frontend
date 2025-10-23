import CoinTable from "@/components/CoinTable";
import TopCoinsPage from "@/components/TopCoinsPage";

export const revalidate = 60; // ISR every 1 min

export default async function Page() {
  let coins: any[] = [];

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/coins`);

    if (!res.ok) throw new Error("Failed to fetch");

    coins = await res.json();
  } catch (err) {
    console.error("Error fetching coins:", err);
    coins = []; // fallback to empty array
  }

  return <TopCoinsPage initialCoins={coins} />;
}
