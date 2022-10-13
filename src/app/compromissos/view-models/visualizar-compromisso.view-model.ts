import { Time } from "@angular/common";
import { FormsContatoViewModel } from "src/app/contatos/view-models/forms-contato.view-model";
import { ListarContatoViewModel } from "src/app/contatos/view-models/listar-contato.view-model";

export class VisualizarCompromissoViewModel {
  id: string;
  assunto: string;
  data: Date;
  horaInicio: Time;
  horaTermino: Time;
  nomeContato: string;
}


