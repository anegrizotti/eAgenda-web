import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { FormsContatoViewModel } from 'src/app/contatos/view-models/forms-contato.view-model';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { FormsCompromissoViewModel, TipoLocalizacaoCompromissoEnum } from '../view-models/forms-compromisso.view-models';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html'
})

export class InserirCompromissoComponent implements OnInit {
  public formCompromisso: FormGroup;

  public compromissoFormVM: FormsCompromissoViewModel = new FormsCompromissoViewModel();

  public contatos$: Observable<ListarContatoViewModel[]>;

  public tiposLocal = Object.values(TipoLocalizacaoCompromissoEnum)
  .filter(v => !Number.isFinite(v));

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private contatoService: ContatoService,
  ) {
    titulo.setTitle('Cadastrar Compromisso - e-Agenda');
  }

  ngOnInit(): void {
    this.formCompromisso = this.formBuilder.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      local: ['', [Validators.required, Validators.minLength(3)]],
      link: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaTermino: ['', [Validators.required]],
      contatoId: ['', [Validators.required]]
    });

    this.contatos$ = this.contatoService.selecionarTodos();
  }

  get assunto() {
    return this.formCompromisso.get('assunto');
  }

  get local() {
    return this.formCompromisso.get('local');
  }

  get tipoLocal() {
    return this.formCompromisso.get('tipoLocal');
  }

  get link() {
    return this.formCompromisso.get('link');
  }

  get data() {
    return this.formCompromisso.get('data');
  }

  get horaInicio() {
    return this.formCompromisso.get('horaInicio');
  }

  get horaTermino() {
    return this.formCompromisso.get('horaTermino');
  }

  get contato() {
    return this.formCompromisso.get('contato');
  }

  get contatoId() {
    return this.formCompromisso.get('contatoId');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.compromissoFormVM = Object.assign({}, this.compromissoFormVM, this.formCompromisso.value);

    this.compromissoService.inserir(this.compromissoFormVM)
      .subscribe({
        next: (compromissoInserido) => this.processarSucesso(compromissoInserido),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: FormsCompromissoViewModel): void {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }
}
