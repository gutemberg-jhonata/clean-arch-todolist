import { beforeAll, describe, expect, it } from 'vitest';
import { mock, MockProxy } from 'vitest-mock-extended';

import { LoadAvaliableTasksService } from '@/domain/use-cases';
import { LoadTasksRepo } from '@/domain/contracts/repos';

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
});
