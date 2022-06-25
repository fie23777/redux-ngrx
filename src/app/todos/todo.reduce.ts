import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { crear } from './todo.acao';

export const estadoInicial: Todo[] = [ new Todo('Salvar o mundo!')];

export const _todoReducer = createReducer( estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),

);

export function todoReducer(estado: any, acao: any){
  return _todoReducer(estado, acao);
}
