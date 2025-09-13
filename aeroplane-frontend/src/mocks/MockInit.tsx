"use client";

import { useEffect } from "react";

export default function MockInit() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("./browser").then(({ worker }) => worker.start());
    }
  }, []);

  return null;
}
