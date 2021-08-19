import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../modelos';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getTodasTarefas()
      .subscribe(tarefas => this.listaTarefas = tarefas);
  }

}
