import { http, HttpResponse } from "msw";
export const handlers = [
  http.post("/api/search", async () => {
    return HttpResponse.json({ offers: [] });
  }),
];
