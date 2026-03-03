const URL = "https://jsonplaceholder.typicode.com/todos"

export async function fetchData() {
    const savedData = localStorage.getItem("todos");

    if(savedData) {
        return JSON.parse(savedData);
    }

    try {
        const response = await fetch(URL)
        const data = await response.json()

        const transformedData = data.map((todo) => ({
            id: todo.id,
            label: todo.title,
            checked: todo.completed,
        }))

        localStorage.setItem("todos", JSON.stringify(transformedData));

        return transformedData;
    }
    catch (error) {
        throw new Error(`API failed: ${error.message}`);
    }
}

export function saveData(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
