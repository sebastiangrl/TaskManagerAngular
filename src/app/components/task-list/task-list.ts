import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task';
import { Observable } from 'rxjs';

// 📝 DIFERENCIA #5: Decorador @Component
// En Next.js solo exportarías una función/componente
@Component({
  selector: 'app-task-list', // Nombre del tag HTML
  imports: [CommonModule], // Módulos necesarios (como NgIf, NgFor)
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  // 📝 DIFERENCIA #6: Observable con async pipe
  // En Next.js usarías useState y actualizarías manualmente
  tasks$: Observable<Task[]>;

  // 📝 DIFERENCIA #7: Dependency Injection en el constructor
  // Angular inyecta automáticamente el servicio
  // En Next.js tendrías que importar y usar directamente
  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
  }

  // Métodos para manejar eventos del template
  onToggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
