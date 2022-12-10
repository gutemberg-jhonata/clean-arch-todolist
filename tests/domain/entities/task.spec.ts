import { Task } from '@/domain/entities';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Task', () => {
  let sut: Task;

  beforeAll(() => {
    sut = new Task({ description: 'any_description' });
  });

  it('should create a new task with correct attributes', () => {
    expect(sut.description).toBe('any_description');
    expect(sut.isCompleted).toBe(false);
  });
});
