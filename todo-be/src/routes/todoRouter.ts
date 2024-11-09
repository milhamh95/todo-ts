import { Context, Elysia, t } from "elysia";

import { todoService } from "../ioc/instance";
import { AddTodoRequest, EditTodoRequest } from "../services/iTodoService";
import { createResponse } from "./createResponse";

export const todoRouter = new Elysia().group("/todos", (app) =>
  app
    .get(
      "/",
      async ({ set }: Context) => {
        const todos = await todoService.fetchTodo();

        set.status = 200;
        return createResponse(todos);
      },
      {
        tags: ["todos"],
      }
    )
    .get(
      "/:id",
      async ({ params, set }: Context) => {
        const todo = todoService.getTodo(params.id);

        set.status = 200;
        return createResponse(todo);
      },
      {
        tags: ["todos"],
      }
    )
    .post(
      "/",
      async ({ body, set }) => {
        const todoReq: AddTodoRequest = {
          ...body,
        };

        const todo = await todoService.addTodo(todoReq);

        set.status = 201;
        return createResponse(todo);
      },
      {
        body: t.Object({
          description: t.String(),
          isDone: t.Boolean(),
        }),
        tags: ["todos"],
      }
    )
    .put(
      "/:id",
      async ({ params, body, set }) => {
        const todoReq: EditTodoRequest = {
          ...body,
        };

        const todo = await todoService.editTodo(params.id, todoReq);

        set.status = 200;
        return createResponse(todo);
      },
      {
        body: t.Object({
          description: t.String(),
          isDone: t.Boolean(),
        }),
        tags: ["todos"],
      }
    )
    .delete(
      "/:id",
      async ({ params, set }) => {
        await todoService.removeTodo(params.id);

        set.status = 200;
        return createResponse();
      },
      {
        tags: ["todos"],
      }
    )
);
