import "reflect-metadata";

import { Container } from "inversify";

import { prisma } from "@/infrastructure/prisma";

import { TodoRepository } from "../repositories/todoRepository";
import { ITodoRepository } from "../services/iTodoRepository";
import { ITodoService } from "../services/iTodoService";
import { TodoService } from "../services/todoService";
import { TYPES } from "./types";

export const container = new Container();

container.bind(TYPES.prismaClient).toConstantValue(prisma);
container.bind<ITodoRepository>(TYPES.todoRepo).to(TodoRepository);
container.bind<ITodoService>(TYPES.todoService).to(TodoService);

export const todoService = container.get<ITodoService>(TYPES.todoService);
