import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../modelos';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa.service';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[] = [{
    id: "1",
    titulo: "Titulo1",
    descricao: "Descrição",
    prazo: new Date("2021-01-01"),
    data_criacao: new Date(Date.now()),
    status: true,
  }, {
    id: "3",
    titulo: "Titulo3",
    descricao: "Descrição",
    prazo: new Date("2021-01-01"),
    data_criacao: new Date(Date.now()),
    status: true,
  }, {
    id: "2",
    titulo: "Titulo2",
    descricao: "Descrição",
    prazo: new Date("2021-01-01"),
    data_criacao: new Date(Date.now()),
    status: true,
  }];

  checkoutForm = this.formBuilder.group({
    titulo: '',
    descricao: '',
    prazo: '',
    status: '',
  });

  onSubmit(): void {
    console.warn(this.checkoutForm.value)
  }

  constructor(
    private tarefaService: TarefaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  salvarTarefa(): void {

  }

}
