import { Todo } from "@prisma/client";
import { TodoRepository } from "../repositories/todoRepository";
import { ITodoService } from "./iTodoService";
import { NotFoundError } from "elysia";

export class TodoService implements ITodoService {
  private readonly todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  addTodo() {
    console.log("addTodo");
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

  editTodo() {
    console.log("addTodo");
  }

  removeTodo() {
    console.log("addTodo");
  }
}
