import { Todo } from "@prisma/client";

import { AddTodoRequest, EditTodoRequest } from "./iTodoService";

export interface ITodoRepository {
  fetchTodo: () => Promise<Todo[]>;
  getTodo: (id: string) => Promise<Todo | null>;
  addTodo: (todo: AddTodoRequest) => Promise<Todo>;
  editTodo: (id: string, req: EditTodoRequest) => Promise<Todo>;
  removeTodo: (id: string) => void;
}
