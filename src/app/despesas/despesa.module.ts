import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaAppComponent } from './despesa-app.component';
import { ListarComponent } from './listar/listar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { EditarComponent } from './editar/editar.component';
import { InserirComponent } from './inserir/inserir.component';


@NgModule({
  declarations: [
    DespesaAppComponent,
    ListarComponent,
    ExcluirComponent,
    EditarComponent,
    InserirComponent
  ],
  imports: [
    CommonModule,
    DespesaRoutingModule
  ]
})
export class DespesaModule { }
