import { Todo } from "./todos/models/todo";
import { TodoListComponent } from "./todos/todo-list/todo-list.component";

export interface AppEstado
{
  todos: Todo[]
}
