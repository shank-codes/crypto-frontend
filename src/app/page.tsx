import CoinTable from "@/components/CoinTable";

export const revalidate = 60; // ISR every 1 min

export default async function Page() {
  let coins: any[] = [];

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/coins`);

    if (!res.ok) throw new Error("Failed to fetch");

    coins = await res.json();
  } catch (err) {
    console.error("Error fetching coins:", err);
    coins = []; // fallback to empty array
  }

  return (
    <main className="p-6">
      <CoinTable coins={coins} />
    </main>
  );
}
