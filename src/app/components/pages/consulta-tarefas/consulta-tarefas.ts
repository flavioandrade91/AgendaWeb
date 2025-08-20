import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-consulta-tarefas',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consulta-tarefas.html',
  styleUrl: './consulta-tarefas.css',
})
export class ConsultaTarefas {
  //atributos
  private http = inject(HttpClient);

  //Criando um formulário reativo
  formulario = new FormGroup({
    dataHoraInicio: new FormControl(''),
    dataHoraFim: new FormControl(''),
  });

  //funcao para captura o submit
  onsubmit() {
    //capturando os dados do formulário
    const dataHoraInicio = this.formulario.value.dataHoraInicio;
    const dataHoraFim = this.formulario.value.dataHoraFim;

    //enviar uma requisição HTTP
    this.http
      .get(`${environment.apiTarefas}/${dataHoraInicio}/${dataHoraFim}`)
      .subscribe((response) => {
        console.table(response);
      });
  }
}
