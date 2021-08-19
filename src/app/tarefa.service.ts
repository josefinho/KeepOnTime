import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarefa } from 'src/entity/Tarefa';
import { Connection } from 'typeorm';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private connection: Connection) { }

  getTodasTarefas(): Observable<Tarefa[]> {
  }

  getTarefaPelaId(id: string): Observable<Tarefa> {
  }
}
