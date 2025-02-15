import { trpc } from "@/trpc/client";

export default async function Home() {
  const { data } = trpc.hello.useQuery({ text: "Amine World!" });

  return <div>Client component says: {data?.greeting}</div>;
}
