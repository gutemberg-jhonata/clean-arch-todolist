import { beforeAll, describe, expect, it } from 'vitest';
import { mock, MockProxy } from 'vitest-mock-extended';

import { LoadAvaliableTasksService } from '@/domain/use-cases';
import { LoadTasksRepo } from '@/domain/contracts/repos';
import { Task } from '@/domain/entities';

describe('LoadAvaliableTasksService', () => {
  let taskRepo: MockProxy<LoadTasksRepo>;
  let sut: LoadAvaliableTasksService;

  beforeAll(() => {
    taskRepo = mock();
    sut = new LoadAvaliableTasksService(taskRepo);
  });

  it('should call TaskRepo with correct params', () => {
    sut.perform();

    expect(taskRepo.loadByIsCompleted).toBeCalledWith({
      isCompleted: false
    });
    expect(taskRepo.loadByIsCompleted).toHaveBeenCalledOnce();
  });

  it('should return avaliable tasks when taskRepo returns data', async () => {
    taskRepo.loadByIsCompleted.mockResolvedValue([
      new Task({ description: 'any_description' })
    ]);

    const avalibleTasks = await sut.perform();

    expect(avalibleTasks).toHaveLength(1);
  });
});
