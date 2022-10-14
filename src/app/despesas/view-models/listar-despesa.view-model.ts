import { DecimalPipe } from "@angular/common";
import { FormaPgtoDespesaEnum } from "./forms-despesa.view-model";

export class ListarDespesaViewModel {
  id: string;
  descricao: string;
  valor: DecimalPipe;
  data: Date;
  formaPagamento: FormaPgtoDespesaEnum;
}
