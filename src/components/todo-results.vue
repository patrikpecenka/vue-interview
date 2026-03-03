<template>
    <div class="todo-result">
        <p :class="completedTodos >= 1 ? 'green-text' : 'red-text'">
          <span style="color: black; font-weight: 400;">Completed tasks:</span> {{ completedTodos }}
        </p>
    </div>
</template>

<script>
import { useCompletedTodos } from '@/composables/useCompletedTodos';
import { defineComponent } from "vue";

export default defineComponent({
    name: "TodoResults",

    setup() {
      const { completedTodos } = useCompletedTodos()

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
