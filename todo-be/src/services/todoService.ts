import { Todo } from "@prisma/client";
import { NotFoundError } from "elysia";
import { inject, injectable } from "inversify";

import { TYPES } from "../ioc/types";
import { TodoRepository } from "../repositories/todoRepository";
import { AddTodoRequest, EditTodoRequest,ITodoService } from "./iTodoService";

@injectable()
export class TodoService implements ITodoService {
  private readonly todoRepository: TodoRepository;

  constructor(@inject(TYPES.todoRepo) todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async addTodo(req: AddTodoRequest): Promise<Todo> {
    return await this.todoRepository.addTodo(req);
  }

  async fetchTodo(): Promise<Todo[]> {
    return await this.todoRepository.fetchTodo();
  }

  async getTodo(id: string): Promise<Todo> {
    const todo = await this.todoRepository.getTodo(id);

    if (!todo) {
      throw new NotFoundError("todo not found sd");
    }

    return todo;
  }

  async editTodo(id: string, req: EditTodoRequest): Promise<Todo> {
    return await this.todoRepository.editTodo(id, req);
  }

  async removeTodo(id: string) {
    await this.todoRepository.removeTodo(id);
  }
}
