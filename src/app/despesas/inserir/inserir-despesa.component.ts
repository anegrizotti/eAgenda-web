import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/categorias/services/categoria.service';
import { FormsCategoriaViewModel } from 'src/app/categorias/view-models/forms-categoria.view-model';
import { ListarCategoriaViewModel } from 'src/app/categorias/view-models/listar-categoria.view-model';
import { DespesaService } from '../services/despesa.service';
import { FormaPgtoDespesaEnum, FormsDespesaViewModel } from '../view-models/forms-despesa.view-model';

@Component({
  selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html'
})

export class InserirDespesaComponent implements OnInit {
  public formDespesa: FormGroup;
  public formCategorias: FormGroup;

  public despesaFormVM: FormsDespesaViewModel = new FormsDespesaViewModel();

  public categorias$: Observable<ListarCategoriaViewModel[]>;

  public formaPagamentos = Object.values(FormaPgtoDespesaEnum)
  .filter(v => !Number.isFinite(v));

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private despesaService: DespesaService,
    private router: Router,
    private categoriaService: CategoriaService,
  ) {
    titulo.setTitle('Cadastrar Despesa - e-Agenda');
  }

  ngOnInit(): void {
    this.formDespesa = this.formBuilder.group({
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      formaPagamento: ['', [Validators.required]]
    });

    this.formCategorias = this.formBuilder.group({
      titulo: ['']
    });

    this.categorias$ = this.categoriaService.selecionarTodos();
  }

  get descricao() {
    return this.formDespesa.get('descricao');
  }

  get valor() {
    return this.formDespesa.get('valor');
  }

  get data() {
    return this.formDespesa.get('data');
  }

  get formaPagamento() {
    return this.formDespesa.get('formaPagamento');
  }

  get categoriasSelecionadas() {
    return this.formDespesa.get('categoriasSelecionadas');
  }

  get titulo() {
    return this.formCategorias.get('titulo');
  }

  public adicionarCategoria(): void {
    if (this.titulo) {
      let categoria = new FormsCategoriaViewModel();
      categoria.titulo = this.titulo.value;

      this.despesaFormVM.categorias.push(categoria);

      this.formCategorias.reset();
    }
  }

  public gravar() {
    if (this.formDespesa.invalid) return;

    this.despesaFormVM = Object.assign({}, this.despesaFormVM, this.formDespesa.value);

    this.despesaService.inserir(this.despesaFormVM)
      .subscribe({
        next: (despesaInserida) => this.processarSucesso(despesaInserida),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: FormsDespesaViewModel): void {
    this.router.navigate(['/despesas/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }
}
