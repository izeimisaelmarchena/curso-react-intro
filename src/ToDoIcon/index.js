import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './ToDoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
};

function ToDoIcon(props) {
    return (
        <span
            className={`Icon-container Icon-container-${props.type}`}
            onClick={props.onClick}
        >
            {iconTypes[props.type](props.color)}
        </span>
    );
};

export { ToDoIcon };