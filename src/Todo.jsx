
function Todo({key, title}) {
    return(
        <div key={key} className="todo">
            <h1 className="text-amber-600">{title}</h1>
        </div>
    );
}

export default Todo;