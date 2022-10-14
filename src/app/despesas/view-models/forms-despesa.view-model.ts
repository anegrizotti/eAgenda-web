import { DecimalPipe } from "@angular/common";
import { FormsCategoriaViewModel } from "src/app/categorias/view-models/forms-categoria.view-model";

export class FormsDespesaViewModel {
  id: string;
  descricao: string;
  valor: DecimalPipe;
  data: Date;
  formaPagamento: FormaPgtoDespesaEnum;
  categorias: FormsCategoriaViewModel[] = [];
}

export enum FormaPgtoDespesaEnum {
  PIX, Dinheiro, CartaoCredito
}


