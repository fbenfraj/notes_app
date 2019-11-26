import React, { useState } from 'react';
import NotesInput from './NotesInput';
import NotesContainer from './NotesContainer';

const NotesApp = () => {
    const [note, setNote] = useState({ text: '' });
    const [notes, setNotes] = useState([]);

    function getRandomId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function handleInputChange(input) {
        setNote({
            id: getRandomId(),
            text: input
        });
    }

    function handleNoteAdded(e) {
        e.preventDefault();
        setNotes([...notes, note]);
        setNote({ text: '' });
    }

    function handleNoteDelete(id) {
        setNotes(notes.filter(note => note.id !== id));
    }

    function handleNoteChange(e, id) {
        const newNotes = notes;
        const noteToUpdate = notes.find(note => note.id === id);
        const index = notes.indexOf(noteToUpdate);
        noteToUpdate.text = e.target.value;
        if (index !== -1) {
            newNotes[index] = noteToUpdate;
        }
        console.log(newNotes);
        setNotes(newNotes);
    }

    return (
        <>
            <NotesInput
                noteValue={note.text}
                onInputChange={handleInputChange}
                onNoteAdded={handleNoteAdded} />
            <NotesContainer
                notesArray={notes}
                onNoteChange={handleNoteChange}
                onNoteDelete={handleNoteDelete}
            />
        </>
    )
}

export default NotesApp;