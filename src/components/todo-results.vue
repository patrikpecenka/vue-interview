<template>
    <div class="todo-result">
        <p :class="completedTodos >= 1 ? 'green-text' : 'red-text'">
          <span style="color: black; font-weight: 400;">Completed tasks:</span> {{ completedTodos }}
        </p>
    </div>
</template>

<script>
import { useCompletedTodos } from '@/composables/useCompletedTodos';
import { defineComponent, toRef } from "vue";

export default defineComponent({
    name: "TodoResults",
    props: ["todos"],


    setup(props) {
      const todoList = toRef(props, "todos");

      const { completedTodos } = useCompletedTodos(todoList)

      return {
        completedTodos
      }
    }
});

</script>

<style scoped>
.todo-result {
  text-align: center;
  font-size: 1.2rem
}

.red-text {
  font-weight: 600;
  color: red;
}

.green-text {
  font-weight: 600;
  color: rgb(49, 243, 10);
}
</style>
