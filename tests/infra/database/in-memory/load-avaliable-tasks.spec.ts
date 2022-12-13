import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryCreateTask, InMemoryLoadTasks } from '@/infra/database/in-memory/task';

describe('InMemoryLoadTasks', () => {
  let sut: InMemoryLoadTasks;

  beforeEach(() => {
    const createTaskRepo = new InMemoryCreateTask();
    createTaskRepo.create({ description: 'task_1' });
    createTaskRepo.create({ description: 'task_2', isCompleted: true });
    createTaskRepo.create({ description: 'task_3' });
    createTaskRepo.create({ description: 'task_4', isCompleted: true });

    sut = new InMemoryLoadTasks();
  });

  it('should load all avaliable tasks', async () => {
    const [task1, task3] = await sut.loadByIsCompleted({ isCompleted: false });

    expect(task1.description).toBe('task_1');
    expect(task1.isCompleted).toBe(false);
    expect(task3.description).toBe('task_3');
    expect(task3.isCompleted).toBe(false);
  });

  it('should load all completed tasks', async () => {
    const [task2, task4] = await sut.loadByIsCompleted({ isCompleted: true });

    expect(task2.description).toBe('task_2');
    expect(task2.isCompleted).toBe(true);
    expect(task4.description).toBe('task_4');
    expect(task4.isCompleted).toBe(true);
  });
});
