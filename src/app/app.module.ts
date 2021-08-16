import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ListaCadernosComponent } from './lista-cadernos/lista-cadernos.component';
import { ListaBarraFerramentasComponent } from './lista-barra-ferramentas/lista-barra-ferramentas.component';
import { CadernoComponent } from './caderno/caderno.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    ListaTarefasComponent,
    ListaCadernosComponent,
    ListaBarraFerramentasComponent,
    CadernoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
