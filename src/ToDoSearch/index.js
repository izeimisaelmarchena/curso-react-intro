import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '../ToDoContext';

function ToDoSearch() {
    const { searchValue, setSearchValue } = React.useContext(ToDoContext);

    return (
        <input
            placeholder="Cortar Pepino"
            className='ToDoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { ToDoSearch };