import React, { useState } from 'react';
import deleteIcon from '../assets/delete.svg';
import editIcon from '../assets/edit.svg';

const NotesContainer = (props) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            {
                props.notesArray.map(note => {
                    return (
                        <React.Fragment key={note.id}>
                            {
                                editMode ? (
                                    <span>
                                        <input type='text' value={note.text} onChange={(e) => props.onNoteChange(e, note.id)} />
                                    </span>
                                ) : (
                                        <span>
                                            <label>{note.text}</label>
                                            <img
                                                src={editIcon}
                                                height='20px'
                                                width='20px'
                                                alt='edit'
                                                onClick={() => { editMode ? setEditMode(false) : setEditMode(true) }}
                                            />
                                            <img
                                                src={deleteIcon}
                                                height='20px'
                                                width='20px'
                                                alt='delete'
                                                onClick={() => props.onNoteDelete(note.id)}
                                            />
                                        </span>
                                    )
                            }
                        </React.Fragment>
                    );
                })
            }
        </>
    )
}

export default NotesContainer;