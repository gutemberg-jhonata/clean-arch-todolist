import { LoadTasksRepo } from '@/domain/contracts/repos/task';
import { LoadAvaliableTasks } from '@/domain/features';

export class LoadAvaliableTasksService implements LoadAvaliableTasks {
  constructor (private readonly taskRepo: LoadTasksRepo) { }

  perform (): LoadAvaliableTasks.Output {
    return this.taskRepo.loadByIsCompleted({ isCompleted: false });
  }
}
