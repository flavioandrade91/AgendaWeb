import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-cadastro-tarefas',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-tarefas.html',
  styleUrl: './cadastro-tarefas.css',
})
export class CadastroTarefas {
  categorias = signal<any[]>([]);

  private http = inject(HttpClient);
  ngOnInit() {
    // fazendo uma requisição get para consultar as categorias
    this.http.get(environment.apiCategorias).subscribe((response) => {
      this.categorias.set(response as any[]);
    });
  }
}
