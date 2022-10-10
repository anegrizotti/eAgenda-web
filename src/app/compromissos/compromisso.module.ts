import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarComponent } from './listar/listar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { EditarComponent } from './editar/editar.component';
import { InserirComponent } from './inserir/inserir.component';


@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarComponent,
    ExcluirComponent,
    EditarComponent,
    InserirComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule
  ]
})
export class CompromissoModule { }
