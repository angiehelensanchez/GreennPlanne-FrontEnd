"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  from: z.string().min(3),
  to: z.string().min(3),
  date: z.string().min(10),
  pax: z.number().min(1),
});
type Values = z.infer<typeof Schema>;

export default function FlightSearchBar() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Values>({
    resolver: zodResolver(Schema),
    defaultValues: { pax: 1 },
  });

  const onSubmit = (v: Values) => {
    const params = new URLSearchParams({
      from: v.from,
      to: v.to,
      date: v.date,
      pax: String(v.pax),
    });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input aria-label="From" {...register("from")} className="input" />
      <input aria-label="To" {...register("to")} className="input" />
      <input type="date" aria-label="Date" {...register("date")} className="input" />
      <input
        type="number"
        min={1}
        aria-label="Passengers"
        {...register("pax", { valueAsNumber: true })}
        className="input w-24"
      />
      <button className="btn">Search</button>
    </form>
  );
}

