import { Todo } from "@prisma/client";

export interface ITodoService {
  fetchTodo: () => Promise<Todo[]>;
  getTodo: (id: string) => Promise<Todo>;
  addTodo: (req: AddTodoRequest) => Promise<Todo>;
  editTodo: (id: string, req: EditTodoRequest) => Promise<Todo>;
  removeTodo: (id: string) => void;
}

export type AddTodoRequest = Omit<Todo, "id" | "createdAt">;
export type EditTodoRequest = Omit<Todo, "id" | "createdAt">;
