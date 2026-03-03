import { computed } from 'vue';
import { useTodos } from './useTodos';

export function useCompletedTodos() {
  const { todos } = useTodos();

  const completedTodos = computed(() => {
    return todos.value.filter((todo) => todo.checked).length;
  })

  return {
    completedTodos
  }
}
