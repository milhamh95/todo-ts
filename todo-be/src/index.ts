import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

import { todoRouter } from "./routes/todoRouter";

const app = new Elysia().use(swagger()).use(todoRouter).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
