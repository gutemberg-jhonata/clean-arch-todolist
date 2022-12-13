import { LoadTasksRepo } from '@/domain/contracts/repos';
import { Task } from '@/domain/entities';

const tasks: Task[] = [];

export class InMemoryLoadTasks implements LoadTasksRepo {
  loadByIsCompleted (input: LoadTasksRepo.Input): LoadTasksRepo.Output {
    return Promise.resolve(
      tasks.filter(task => task.isCompleted === input.isCompleted)
    );
  }
}

type CreateTaskProps = {
  description: string
  isCompleted?: boolean
}

export class InMemoryCreateTask {
  create (input: CreateTaskProps) {
    const newTask = new Task(input);
    if (input.isCompleted) {
      newTask.completeTask();
    }
    tasks.push(newTask);
  }
}
