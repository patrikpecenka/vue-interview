<template>
    <div class="todo-list">
        <span class="todo-list-title">Things to do:</span>
        <div class="todo-list-content" v-if="todos.length >= 1">
            <TodoCheckbox
                v-for="todoItem in todos"
                :key="todoItem.id"
                :label="todoItem.label"
                :checked="todoItem.checked"
                @click="() => toggleTodo(todoItem.id)"
                @delete="() => removeTodo(todoItem.id)"
                @key-up="(e) => handleKeyUp(e, todoItem.id)"
            />
        </div>
        <div class="no-todos" v-else>
            No todos yet
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { defineComponent } from "vue";
import TodoCheckbox from "./todo-checkbox.vue";
import { useTodos } from '@/composables/useTodos';

export default defineComponent({
    name: "TodoList",

    components: { TodoCheckbox },

    setup() {
        const { toggleTodo, todos, removeTodo } = useTodos();

        const handleKeyUp = (e, id) => {
            if (e.keyCode === 13) {
                toggleTodo(id);
            }
        };

        return {
            toggleTodo,
            removeTodo,
            handleKeyUp,
            todos
        };
    },
});
</script>

<style scoped>
.todo-list {
    padding: 10px 0;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
}

.todo-list-title {
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
    padding: 5px 0;
    margin-bottom: 10px;
}

.todo-list-content {
    max-height: 700px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.no-todos {
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
    color: gray;
}
</style>
