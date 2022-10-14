import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CategoriaAppComponent } from './categoria-app.component';
import { InserirCategoriaComponent } from './inserir/inserir-categoria.component';

const routes: Routes = [
  {
    path: '', component: CategoriaAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inserir', component: InserirCategoriaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
