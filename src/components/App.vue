<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <form v-on:submit.prevent="addTodo">
      <input class="new-todo-text"
        autofocus
        placeholder="Write your todo here !"
        v-model="text"
        >
      <input class="new-todo-due-date"
        type="date"
        v-model="dueDate"
        >
        <input type="submit">
      </form>
    </header>
    <section class="main" v-show="todos.length">

      <ul class="todo-list">
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo"></todo>
      </ul>
    </section>
  </section>
</template>

<script>
import Todo from './Todo';

export default {
  components: { Todo },
  data() {
    return {
      text: '',
      dueDate: null,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    allChecked() {
      return this.todos.every(todo => todo.done);
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  },
  methods: {
    addTodo() {
      const { text, dueDate } = this;
      if (text.trim()) {
        this.$store.commit('addTodo', { text, dueDate });
      }
      this.text = '';
    },
  },
};
</script>
