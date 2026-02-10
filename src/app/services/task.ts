import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([
    {
      id: 1,
      title: 'Aprender Fundamentos de Angular',
      description: 'Entender las diferencias clave entre Angular y Next.js, incluyendo inyección de dependencias y RxJS',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Dominar RxJS Observables',
      description: 'Practicar trabajando con Observables, Subjects y patrones de programación reactiva',
      completed: false,
      createdAt: new Date(),
    },
  ]);

  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() { }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(title: string, description: string): void {
    const currentTasks = this.tasksSubject.value;
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    this.tasksSubject.next([...currentTasks, newTask]);
  }

  toggleTask(id: number): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  deleteTask(id: number): void {
    const currentTasks = this.tasksSubject.value;
    const filteredTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSubject.next(filteredTasks);
  }

  updateTask(id: number, title: string, description: string): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    this.tasksSubject.next(updatedTasks);
  }
}
