import { useState } from "react";

function CreateTodo() {

    const [title, setTitle] = useState(""); 
    const addTodo = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: {title},
                completed: false,
            }),
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
            })
        });
    }
      return (
        <>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-rose-800 rounded-4xl p-1 text-black" type="text" placeholder="Enter your Todo" />
            <button onClick={addTodo} className="bg-rose-700 px-4 py-2 m-2 text-white text-sm rounded-4xl">ADD</button>
        </>
      )
}

export default CreateTodo;