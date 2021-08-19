import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { lista_prioridades } from './mockdata';
import { Prioridade } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class PrioridadeService {

  constructor() { }

  getTodasPrioridades(): Observable<Prioridade[]> {
    const prioridades = of(lista_prioridades)
    return prioridades;
  }

  getTarefaPelaId(id: number): Observable<Prioridade> {
      const prioridade = lista_prioridades.find(prioridade => prioridade.id === id)!;
      return of(prioridade);
  }
}
