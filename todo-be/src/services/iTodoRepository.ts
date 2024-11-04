import { Todo } from "@prisma/client";

export interface ITodoRepository {
  fetchTodo: () => Promise<Todo[]>;
  getTodo: (id: string) => Promise<Todo | null>;
}
