export function TodoItem({title, id, completed, toggleTodo, deleteTodo}) {
    return (
        <li key={id}>
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button className="btn-delete" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </li>
    )
}