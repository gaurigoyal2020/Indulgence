import { useState, useEffect } from 'react'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((data) => {
                setTodos(data);
            });
        });
    }
    , []);

    return (
        <>
            <div className="todo-List">   
                {
                    todos.map((todo) => {
                        return <Todo key={todo.id} title={todo.title} completed={todo.completed}/>;
                    })
                }
            </div>
        </>
    );
}

export default TodoList;