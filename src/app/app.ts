import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { CadastroTarefas } from './components/pages/cadastro-tarefas/cadastro-tarefas';
import { EdicaoTarefas } from './components/pages/edicao-tarefas/edicao-tarefas';
import { ConsultaTarefas } from './components/pages/consulta-tarefas/consulta-tarefas';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    CadastroTarefas,
    EdicaoTarefas,
    ConsultaTarefas,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
