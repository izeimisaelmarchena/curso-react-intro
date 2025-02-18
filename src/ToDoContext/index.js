import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    //state, setState
    const [searchValue, setSearchValue] = React.useState('');
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false);

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;

    const totalToDos = toDos.length;

    const searchedToDos = toDos.filter((toDo) => {

        const toDoText = toDo.text.toLowerCase();
        const searchedText = searchValue.toLowerCase();

        return toDoText.includes(searchedText);
    });



    const completeToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        if (newToDos[toDoIndex].completed === false) {
            newToDos[toDoIndex].completed = true;
        } else {
            newToDos[toDoIndex].completed = false;
        }

        saveToDos(newToDos);
    };

    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false
        });
        saveToDos(newToDos);
    };

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider };