import { computed } from 'vue';

export function useCompletedTodos(todos) {
  const completedTodos = computed(() => {
    return todos.value.filter((todo) => todo.checked).length;
  })

  return {
    completedTodos
  }
}
