import React from 'react';
import { ToDoIcon } from '.';

function DeleteIcon(props) {
    return (
        <ToDoIcon
            type="delete"
            color="gray"
            onClick={props.onDelete}
        />
    );
}
export { DeleteIcon };