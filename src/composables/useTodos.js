import { ref, watch } from 'vue';
import { fetchData, saveData } from './fetchData';

const todos = ref([])

watch(todos, (newTodos) => {
    saveData(newTodos);
})

export function useTodos() {
    async function loadTodos() {
        todos.value = await fetchData()
    }

    function addTodo(label) {
        const id = todos.value.length > 0
            ? todos.value[todos.value.length - 1].id + 1
            : 0;
        todos.value = [
            ...todos.value,
            {
                id,
                label,
                checked: false,
            }
        ]
    }

    function removeTodo(id) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }

    function toggleTodo(id) {
        todos.value = todos.value.map((todo) =>
            todo.id === id
                ? { ...todo, checked: !todo.checked }
                : todo
        )
    }

    return {
        removeTodo,
        addTodo,
        todos,
        loadTodos,
        toggleTodo,
    }
}
