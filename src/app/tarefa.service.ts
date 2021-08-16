import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { lista_tarefas } from './mockdata';
import { Tarefa } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTodasTarefas(): Observable<Tarefa[]> {
    const tarefas = of(lista_tarefas)
    return tarefas;
  }

  getTarefaPelaId(id: string): Observable<Tarefa> {
      const tarefa = lista_tarefas.find(tarefa => tarefa.id === id)!;
      return of(tarefa);
  }
}
