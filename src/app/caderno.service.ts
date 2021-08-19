import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { lista_caderno } from './mockdata';
import { Caderno } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class CadernoService {

  constructor() { }

  getTodasCadernos(): Observable<Caderno[]> {
    const cadernos = of(lista_caderno)
    return cadernos;
  }

  getCadernoPelaId(id: string): Observable<Caderno> {
      const caderno = lista_caderno.find(caderno => caderno.id === id)!;
      return of(caderno);
  }
}
