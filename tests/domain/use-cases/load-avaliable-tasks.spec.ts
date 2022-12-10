import { beforeAll, describe, expect, it } from 'vitest';
import { mock, MockProxy } from 'vitest-mock-extended';

import { LoadAvaliableTasksService } from '@/domain/use-cases';
import { LoadTasksRepo } from '@/domain/contracts/repos';

describe('LoadAvaliableTasksService', () => {
  let taskRepo: MockProxy<LoadTasksRepo>;

  beforeAll(() => {
    taskRepo = mock();
  });

  it('should call TaskRepo with correct params', () => {
    const sut = new LoadAvaliableTasksService(taskRepo);

    expect(taskRepo.loadByIsCompleted).toBeCalledWith({
      isCompleted: false
    });
    expect(taskRepo.loadByIsCompleted).toHaveBeenCalledOnce();
  });
});
