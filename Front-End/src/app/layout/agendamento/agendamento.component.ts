import { Component, OnInit, ViewChild } from '@angular/core';
import { Medico } from 'src/app/shared/models/medico.model';
import { MEDICOS } from './mock.medico';
import { Especialidade } from 'src/app/shared/models/especialidade.model';
import { ESPECIALIDADES } from './mock.especialidade';
import { tipo } from 'src/app/shared/models/tipoAgendamento.model';
import { TIPO } from './mock.tipoAgendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  public dataEscolhida: string = "";
  public clinicaSolicitante: string = 'CLN - BOTAFOGO | R. PRINCESA ISABEL, 850';
  public medicos: Medico[] = MEDICOS;
  public especialidades: Especialidade[] = ESPECIALIDADES;
  public tipoAgendamento: tipo[] = TIPO;
  constructor() { }

  ngOnInit() {
  }

}
