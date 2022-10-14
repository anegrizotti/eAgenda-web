import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaAppComponent } from './despesa-app.component';
import { ListarDespesaComponent } from './listar/listar-despesa.component';
import { ExcluirDespesaComponent } from './excluir/excluir.component';
import { EditarDespesaComponent } from './editar/editar.component';
import { InserirDespesaComponent } from './inserir/inserir-despesa.component';
import { DespesaService } from './services/despesa.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from '../categorias/services/categoria.service';


@NgModule({
  declarations: [
    DespesaAppComponent,
    ListarDespesaComponent,
    ExcluirDespesaComponent,
    EditarDespesaComponent,
    InserirDespesaComponent,
  ],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [DespesaService, CategoriaService]
})
export class DespesaModule { }
