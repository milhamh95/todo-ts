import { Todo } from "@prisma/client";

export interface ITodoService {
  fetchTodo: () => Promise<Todo[]>;
  getTodo: (id: string) => Promise<Todo>;
}
