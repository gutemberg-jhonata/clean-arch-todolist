import { Task } from '@/domain/entities';

export interface LoadAvaliableTasks {
  perform: () => LoadAvaliableTasks.Output
}

export namespace LoadAvaliableTasks {
  export type Output = Promise<Task[] | []>
}
