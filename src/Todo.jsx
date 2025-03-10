
function Todo({title, completed}) {
    return(
        <div className={`todo bg-rose-400 m-2 p-3
        ${completed ? "bg-violet-500 shadow-purple-950" : "bg-rose-400 shadow-rose-950"} rounded-2xl shadow-`} >
            <h1 className="text-white">{title}</h1>
        </div>
    );
}

export default Todo;