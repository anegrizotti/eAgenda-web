import { DecimalPipe } from "@angular/common";
import { FormaPgtoDespesaEnum } from "./forms-despesa.view-model";

export class VisualizarDespesaViewModel {
  id: string;
  descricao: string;
  valor: DecimalPipe;
  data: Date;
  formaPagamento: FormaPgtoDespesaEnum;
  categorias: string[] = [];
}

