import { useNavigate } from "react-router-dom";

function Todo({ id, title, completed}) {
    
    const navigate = useNavigate();

    const editTodo = () => {
        navigate('create/' + id);
    }
    
    const deleteTodo = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE",
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
        });
    }

    return(
        <div className={`todo m-2 p-3
            ${completed ? "bg-violet-500 shadow-amber-200" : "bg-rose-400 shadow-amber-200"} rounded-2xl shadow-md
            flex `} >
            
            <h1 className="text-white">{title}</h1>
            <div>
                <button className="" onClick={editTodo}>
                    edit
                </button>
                <button className="" onClick={deleteTodo}>
                    del
                </button>
            </div>
        </div>
    );
}

export default Todo;