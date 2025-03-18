import { app } from "./src/app.ts"

Deno.serve({ port: 3040 }, app.fetch)
