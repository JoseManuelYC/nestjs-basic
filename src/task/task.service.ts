import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    { id: '1', title: 'Hello', description: '', status: TaskStatus.PENDING },
  ];
  getAllTask() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return this.tasks;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updateFiels: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFiels);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
