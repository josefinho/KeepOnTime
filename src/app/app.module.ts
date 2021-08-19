import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ListaCadernosComponent } from './lista-cadernos/lista-cadernos.component';
import { ListaBarraFerramentasComponent } from './lista-barra-ferramentas/lista-barra-ferramentas.component';
import { CadernoComponent } from './caderno/caderno.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TarefaEditorComponent } from './tarefa-editor/tarefa-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    ListaTarefasComponent,
    ListaCadernosComponent,
    ListaBarraFerramentasComponent,
    CadernoComponent,
    TarefaEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
