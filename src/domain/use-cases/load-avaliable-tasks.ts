import { LoadTasksRepo } from '@/domain/contracts/repos/task';

export class LoadAvaliableTasksService {
  constructor (private readonly taskRepo: LoadTasksRepo) {
    taskRepo.loadByIsCompleted({ isCompleted: false });
  }
}
