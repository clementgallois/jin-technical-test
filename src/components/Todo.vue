<template>
  <li class="todo">
    <div class="view">
      <v-select
      label="name"
      :options="$store.state.status"
      v-model="todo.status"
      @input="statusChange({todo})"
      ></v-select>
      <span >{{todo.text}} before {{todo.dueDate | moment("DD/MM/YYYY")}}</span>

      <button class="destroy" @click="deleteTodo({ todo: todo })">delete</button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    ...mapMutations([
      'statusChange',
      'deleteTodo',
    ]),
  },
};
</script>
