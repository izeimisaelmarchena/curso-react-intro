import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css'

function ToDoForm() {

    const { setOpenModal, addToDo } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea placeholder='Cortar lechuga' value={newToDoValue} onChange={onChange} />
            <div className='ToDoForm-buttonContainer'>
                <button type='button' className='ToDoForm-button ToDoForm-button--cancel' onClick={onCancel}>Cancelar</button>
                <button type='submit' className='ToDoForm-button ToDoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { ToDoForm };