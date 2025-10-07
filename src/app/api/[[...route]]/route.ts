import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ bubu: "dudu" });
});

app.get("/project/:projectid", (c) => {
    const { projectid } = c.req.param
    return c.json({project: projectid })
})

export const GET = handle(app);