import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getAllTask(): Task[] {
    return this.taskService.getAllTask();
  }
  @Post()
  createtask(@Body() newTask: CreateTaskDto) {
    this.taskService.createTask(newTask.title, newTask.description);
    return 'Guardando Tarea';
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFiels: UpdateTaskDto) {
    return this.taskService.updateTask(id, updateFiels);
  }
}
