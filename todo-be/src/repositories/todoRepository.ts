import { PrismaClient, Todo } from "@prisma/client";
import { ITodoRepository } from "../services/iTodoRepository";

export class TodoRepository implements ITodoRepository {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
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
}
