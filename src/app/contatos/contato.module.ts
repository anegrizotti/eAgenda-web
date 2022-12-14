import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoAppComponent } from './contato-app.component';
import { ListarContatoComponent } from './listar/listar-contato.component';
import { EditarContatoComponent } from './editar/editar-contato.component';
import { ExcluirContatoComponent } from './excluir/excluir-contato.component';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from './services/contato.service';
import { FormsContatoResolver } from './services/forms-contato.resolver';
import { VisualizarContatoResolver } from './services/visualizar-contato.resolver';
import { ContatoRoutingModule } from './contato-routing.module';



@NgModule({
  declarations: [
    ContatoAppComponent,
    ListarContatoComponent,
    EditarContatoComponent,
    ExcluirContatoComponent,
    InserirContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [ContatoService, FormsContatoResolver, VisualizarContatoResolver]
})
export class ContatoModule { }
