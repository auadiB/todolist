

export function SearchBar({todos}) {
    
    return (
        <div className="search">
            Search
            <input value={todos} type='search' /> 
        </div>
    )
}