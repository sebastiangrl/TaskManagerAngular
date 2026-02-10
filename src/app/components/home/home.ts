import { Component } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-home',
  imports: [TaskForm, TaskList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  title = 'Gestor de Tareas';
}
