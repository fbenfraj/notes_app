import React, { useState, useEffect } from "react";
import NotesInput from "../NotesInput/NotesInput";
import NotesContainer from "../NotesContainer/NotesContainer";
import './NotesApp.scss';

const NotesApp = () => {
  const [note, setNote] = useState({ text: "" });
  const [notes, setNotes] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function getRandomId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
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
    setNote({ text: "" });
  }

  function handleNoteUpdate(e, noteId, newText) {
    e.preventDefault();
    setNotes(notes.map(note => note.id === noteId ? { ...note, text: newText } : note));
  }

  function handleNoteDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
  }


  return (
    <main className="app-container">
      <NotesInput
        noteValue={note.text}
        onInputChange={handleInputChange}
        onNoteAdded={handleNoteAdded}
      />
      <NotesContainer notesArray={notes} onNoteDelete={handleNoteDelete} onNoteChange={(e, id, newText) => { handleNoteUpdate(e, id, newText) }} />
    </main>
  );
};

export default NotesApp;
