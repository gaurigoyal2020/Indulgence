import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CreateTodo( {setTodos} ) {

    const [title, setTitle] = useState(""); 
    const {id } = useParams();

    const addTodo = () => {
        if(id) {
            updateTodo();
            return;
        }
        fetch("https://jsonplaceholder.typicode.com/todos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false,
            }),
        }).then((response) => {
            response.json().then((data) => {
                const newTodo = { id: Date.now(), title: title, completed: false }; // Ensure unique ID
                setTodos((prevTodos) => [newTodo, ...prevTodos]); // Add at the top
                setTitle(""); // Clear input field
            })
            .catch((error) => console.error("Error adding todo:", error));
    });
}

    useEffect(() => {
        if(id) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "GET",
            }).then((response) => {
                response.json().then((data) => {
                    setTitle(data.title);
                });
            });
        }
    }, [id]);

    const updateTodo = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false,
            }),
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
        });
    }

      return (
        <div className="flex flex-row mt-10">
            <input value={title} onChange={(e) => setTitle(e.target.value)} 
                className="w-md font-bold shadow-amber-200 shadow-lg border-cyan-600 border-4 rounded-4xl p-3 text-white focus:border-orange-200 focus:outline-none" type="text" placeholder="Enter Task" />
            <button onClick={addTodo} className="bg-cyan-400 px-5 py-2 m-2 font-bold shadow-amber-200 shadow-lg text-white text-sm rounded-4xl">ADD</button>
        </div>
      )
}

export default CreateTodo;