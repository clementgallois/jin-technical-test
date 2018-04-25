
// needed to use eslint with vuex
/* eslint no-shadow: 0 */
/* eslint no-param-reassign: 0 */

export const state = {
  todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
  status: [
    { name: 'Todo', value: 0 },
    { name: 'In Progress', value: 1 },
    { name: 'Done', value: 2 },
  ],
};

export const mutations = {
  addTodo(state, { text, dueDate }) {
    const verifDueDate = new Date(dueDate);
    if (text.length > 0 && verifDueDate instanceof Date && !isNaN(verifDueDate.valueOf())) {
      state.todos.push({
        text,
        creationDate: new Date(),
        dueDate: verifDueDate,
        status: state.status[0],
      });
    }
  },

  deleteTodo(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  statusChange(state, { todo }) {
    todo.status = todo.status;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};
