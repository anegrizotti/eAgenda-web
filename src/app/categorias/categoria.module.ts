import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaAppComponent } from './categoria-app.component';
import { InserirCategoriaComponent } from './inserir/inserir-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from './services/categoria.service';


@NgModule({
  declarations: [
    CategoriaAppComponent,
    InserirCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CategoriaService]
})
export class CategoriaModule { }
