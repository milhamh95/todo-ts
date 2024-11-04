import { Elysia, NotFoundError } from "elysia";
import { todoRouter } from "./routes/todoRouter";

const app = new Elysia()
  .onError(({ error }) => {
    if (error instanceof NotFoundError) {
      return {
        message: error.message,
      };
    }
  })
  .use(todoRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
