// Actions
export const ADD_TODO = 'ADD_TODO';

// Action Creators
export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: content
  }
};

// Reducer
const initialState = {
  items: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
