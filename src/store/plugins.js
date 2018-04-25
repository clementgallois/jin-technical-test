const localStoragePlugin = (store) => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  });
};

export default [localStoragePlugin];
