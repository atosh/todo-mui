import { ADD_TODO, addTodo, todoReducer } from './todos';

describe('addTodo', () => {
  test("returns an action with type 'ADD_TODO'", () => {
    const todo = "Learn Redux";
    const result = addTodo(todo);
    expect(result.type).toBe(ADD_TODO);
  });
  test('returns an action with the passed content', () => {
    const todo = "Learn Redux";
    const result = addTodo(todo);
    expect(result.payload).toBe(todo);
  });
});

describe('todoReducer', () => {
  test('returns the initial state', () => {
    const result = todoReducer(undefined, {});
    expect(result).toEqual({ items: [] });
  });
  test('returns the correct state for ADD_TODO action', () => {
    const todo = "Learn Redux";
    const result = todoReducer(undefined, addTodo(todo));
    expect(result).toEqual({ items: [todo] });
  });
});