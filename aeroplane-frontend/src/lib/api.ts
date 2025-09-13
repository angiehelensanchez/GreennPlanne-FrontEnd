export const API = (path: string, init?: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers||{}) },
    credentials: "include"
  }).then(r => r.json());
