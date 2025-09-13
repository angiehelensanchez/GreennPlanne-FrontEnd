// MSW v2: setupWorker viene de 'msw/browser'
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
