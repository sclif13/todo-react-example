export const addTodo = text => ({
  type: "ADD_TODO",
  text,
});

export const completeTodo = id => ({
  type: "COMPLETE_TODO",
  id,
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id,
});

