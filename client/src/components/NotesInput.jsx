import React from 'react';

const NotesInput = (props) => {
    return (
        <form onSubmit={e => props.onNoteAdded(e)}>
            <input
                value={props.noteValue}
                type='text'
                onChange={(e) => props.onInputChange(e.target.value)} />
            <button type='submit'>OK</button>
        </form>
    );
}

export default NotesInput;