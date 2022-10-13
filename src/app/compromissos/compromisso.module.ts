import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir/excluir-compromisso.component';
import { EditarCompromissoComponent } from './editar/editar-compromisso.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoService } from './services/compromisso.service';
import { FormsCompromissoResolver } from './services/forms-compromisso.resolver';
import { VisualizarCompromissoResolver } from './services/visualizar-compromisso.resolver';
import { ContatoService } from '../contatos/services/contato.service';




@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent,
    InserirCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [CompromissoService, ContatoService, FormsCompromissoResolver, VisualizarCompromissoResolver]
})
export class CompromissoModule { }
