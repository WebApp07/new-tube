"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Hello Amine! Viva australia 2025",
  });

  return <div>Page client says : {data.greeting}</div>;
};
