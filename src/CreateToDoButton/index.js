import './CreateToDoButton.css';

function CreateToDoButton(props) {
    return (
        <button
            className='CreateToDoButton'
            onClick={
                () => {
                    props.setOpenModal(state => !state);
                }
            }
        >+</button>
    );
}

export { CreateToDoButton };