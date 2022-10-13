import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { FormsContatoViewModel } from 'src/app/contatos/view-models/forms-contato.view-model';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { FormsCompromissoViewModel, TipoLocalizacaoCompromissoEnum } from '../view-models/forms-compromisso.view-models';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styles: [
  ]
})

export class EditarCompromissoComponent implements OnInit {
  public formCompromisso: FormGroup;

  public compromissoFormVM: FormsCompromissoViewModel = new FormsCompromissoViewModel();

  public contatos$: Observable<ListarContatoViewModel[]>;

  public tiposLocal = Object.values(TipoLocalizacaoCompromissoEnum)
  .filter(v => !Number.isFinite(v));

  constructor(
    titulo: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private compromissoService: CompromissoService,
    private contatoService: ContatoService
  ) {
    titulo.setTitle('Editar Compromisso - e-Agenda');
  }

  ngOnInit(): void {

    this.compromissoFormVM = this.route.snapshot.data['compromisso'];

    console.log(this.compromissoFormVM);

    this.formCompromisso = this.fb.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      local: ['', [Validators.required, Validators.minLength(3)]],
      link: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaTermino: ['', [Validators.required]],
      contatoId: ['', [Validators.required]]
    });

    this.formCompromisso.patchValue({
      id: this.compromissoFormVM.id,
      assunto: this.compromissoFormVM.assunto,
      local: this.compromissoFormVM.local,
      tipoLocal: this.compromissoFormVM.tipoLocal,
      link: this.compromissoFormVM.link,
      data: this.compromissoFormVM.data,
      horaInicio: this.compromissoFormVM.horaInicio,
      horaTermino: this.compromissoFormVM.horaTermino,
      contatoId: this.compromissoFormVM.contatoId
    });

    this.contatos$ = this.contatoService.selecionarTodos();
  }

  get assunto() {
    return this.formCompromisso.get('assunto');
  }

  get local() {
    return this.formCompromisso.get('local');
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

  get contatoId() {
    return this.formCompromisso.get('contatoId');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.compromissoFormVM = Object.assign({}, this.compromissoFormVM, this.formCompromisso.value);


    this.compromissoService.editar(this.compromissoFormVM)
      .subscribe({
        next: (compromissoEditado) => this.processarSucesso(compromissoEditado),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(compromisso: FormsCompromissoViewModel) {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    console.log(erro);
  }

}
