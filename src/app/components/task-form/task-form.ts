import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task';

// 📝 DIFERENCIA #11: Reactive Forms
// En Next.js usarías useState para cada campo o librerías como react-hook-form
@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskForm: FormGroup;
  submitted = false;

  // 📝 DIFERENCIA #12: FormBuilder - constructor de formularios
  // Angular provee una API robusta para manejar formularios
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    // Crear formulario con validaciones
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Getters para acceder fácilmente a los controles del formulario
  get title() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }

  // Manejar el envío del formulario
  onSubmit(): void {
    this.submitted = true;

    // 📝 DIFERENCIA #13: Validación automática del formulario
    // Angular maneja el estado de validación automáticamente
    if (this.taskForm.valid) {
      const { title, description } = this.taskForm.value;
      this.taskService.addTask(title, description);

      // Resetear formulario
      this.taskForm.reset();
      this.submitted = false;
    }
  }
}
