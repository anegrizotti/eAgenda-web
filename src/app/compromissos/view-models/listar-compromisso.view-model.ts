import { Time } from "@angular/common";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { TipoLocalizacaoCompromissoEnum } from "./forms-compromisso.view-models";

export class ListarCompromissoViewModel {
  id: string;
  assunto: string;
  data: Date;
  horaInicio: Time;
  horaTermino: Time;
  nomeContato: string;
}
