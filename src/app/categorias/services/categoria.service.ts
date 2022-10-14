import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { environment } from "src/environments/environment";
import { FormsCategoriaViewModel } from "../view-models/forms-categoria.view-model";
import { ListarCategoriaViewModel } from "../view-models/listar-categoria.view-model";

@Injectable()
export class CategoriaService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  public inserir(categoria: FormsCategoriaViewModel): Observable<FormsCategoriaViewModel> {
    const resposta = this.http
      .post<FormsCategoriaViewModel>(this.apiUrl + 'categorias', categoria, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }

    public selecionarTodos(): Observable<ListarCategoriaViewModel[]> {
    const resposta = this.http
      .get<ListarCategoriaViewModel[]>(this.apiUrl + 'categorias', this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }

  private obterHeadersAutorizacao() {
    const token = this.localStorageService.obterTokenUsuario();

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
  }


  private processarDados(resposta: any) {
    if (resposta?.sucesso)
      return resposta.dados;
    else
      return resposta;
  }

  private processarFalha(resposta: any) {
    console.log(resposta);
    return throwError(() => new Error(resposta.error.erros[0]));
  }

  public selecionarPorId(id: string): Observable<FormsCategoriaViewModel> {
    const resposta = this.http
      .get<FormsCategoriaViewModel>(this.apiUrl + 'categorias/' + id, this.obterHeadersAutorizacao())
      .pipe(map(this.processarDados), catchError(this.processarFalha));

    return resposta;
  }
}
