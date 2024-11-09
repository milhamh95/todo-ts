import { PrismaClient, Todo } from "@prisma/client";
import { inject, injectable } from "inversify";

import { TYPES } from "@/ioc/types";

import { ITodoRepository } from "../services/iTodoRepository";
import { AddTodoRequest, EditTodoRequest } from "../services/iTodoService";

@injectable()
export class TodoRepository implements ITodoRepository {
  private readonly db: PrismaClient;

  constructor(@inject(TYPES.prismaClient) db: PrismaClient) {
    this.db = db;
  }

  async addTodo(todo: AddTodoRequest): Promise<Todo> {
    return await this.db.todo.create({
      data: todo,
    });
  }

  async fetchTodo(): Promise<Todo[]> {
    return await this.db.todo.findMany();
  }

  async getTodo(id: string): Promise<Todo | null> {
    return await this.db.todo.findFirst({
      where: {
        id,
      },
    });
  }

  async editTodo(id: string, req: EditTodoRequest): Promise<Todo> {
    return await this.db.todo.update({
      where: {
        id,
      },
      data: { ...req },
    });
  }

  async removeTodo(id: string) {
    await this.db.todo.delete({
      where: {
        id,
      },
    });
  }
}
