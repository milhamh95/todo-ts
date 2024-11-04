import { Elysia } from "elysia";
import { TodoController } from "../controllers/todoController";
import { TodoService } from "../services/todoService";
import { prisma } from "../infrastructure/prisma";
import { TodoRepository } from "../repositories/todoRepository";

const prismaClient = prisma;
const todoRepository = new TodoRepository(prismaClient);
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

export const todoRouter = new Elysia().group("/todos", (app) =>
  app.get("/", todoController.fetchTodo).get("/:id", todoController.getTodo)
);
