import CoinTable from "@/components/CoinTable";

export const revalidate = 60; // ISR every 1 min

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/coins`, {
    next: { revalidate: 60 },
  });
  const coins = await res.json();

  return (
    <main className="p-6">
      <CoinTable coins={coins} />
    </main>
  );
}
