import { TodoService } from "../services/todoService";
import { Context } from "elysia";
import { createResponse } from "./response";

export class TodoController {
  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  // addTodo = () => {
  //   this.todoService.addTodo();
  // };

  fetchTodo = async ({ set }: Context) => {
    const todos = await this.todoService.fetchTodo();

    set.status = 200;
    return createResponse(todos);
  };

  getTodo = async ({ params, set }: Context) => {
    const todo = await this.todoService.getTodo(params.id);

    set.status = 200;
    return createResponse(todo);
  };

  // editTodo = () => {
  //   this.todoService.editTodo();
  // };

  // removeTodo = () => {
  //   this.todoService.removeTodo();
  // };
}
