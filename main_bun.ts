import { app } from "./src/app.ts"

console.log("Listening on http://localhost:3040/")

// @ts-ignore supress warning
Bun.serve({
  port: 3040,
  fetch: app.fetch,
})
