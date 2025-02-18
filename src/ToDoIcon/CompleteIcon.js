import React from 'react';
import { ToDoIcon } from '.';

function CompleteIcon(props) {
    return (
        <ToDoIcon
            type="check"
            color={props.completed ? 'green' : 'gray'}
            onClick={props.onComplete}
        />
    );
}
export { CompleteIcon };