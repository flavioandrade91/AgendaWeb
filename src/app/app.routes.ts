import { Routes } from '@angular/router';
import { CadastroTarefas } from './components/pages/cadastro-tarefas/cadastro-tarefas';
import { ConsultaTarefas } from './components/pages/consulta-tarefas/consulta-tarefas';
import { EdicaoTarefas } from './components/pages/edicao-tarefas/edicao-tarefas';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pages/consulta-tarefas',
  },
  {
    path: 'pages/cadastro-tarefas',
    component: CadastroTarefas,
  },
  {
    path: 'pages/consulta-tarefas',
    component: ConsultaTarefas,
  },
  {
    path: 'pages/edicao-tarefas',
    component: EdicaoTarefas,
  },
];
