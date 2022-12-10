import { Task } from '@/domain/entities/task';

export interface LoadTasksRepo {
  loadByIsCompleted: (input: LoadTasksRepo.Input) => LoadTasksRepo.Output
}

export namespace LoadTasksRepo {
  export type Input = {
    isCompleted: boolean
  }

  export type Output = Promise<Task[] | []>
}
