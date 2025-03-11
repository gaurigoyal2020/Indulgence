import { useState, useEffect } from 'react'
import Todo from './Todo'
import CreateTodo from './CreateTodo';

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
        <div className="h-screen bg-[url(/bg1.jpg)] sm:bg-contain md:bg-cover lg:bg-fixed">
            <div className="flex flex-col items-center">
                
                <CreateTodo setTodos={setTodos} />
                <div className="todo-list bg-transparent mt-5 p-4 shadow-lg shadow-amber-200
                    rounded-lg max-w-2xl">   
                    {
                        todos.map((todo) => {
                            return <Todo  key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TodoList;