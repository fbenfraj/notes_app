import React, { useState, useEffect } from "react";
import NotesInput from "./NotesInput";
import NotesContainer from "./NotesContainer";

const NotesApp = () => {
  const [note, setNote] = useState({ text: "" });
  const [notes, setNotes] = useState([]);

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

  function handleNoteDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <>
      <NotesInput
        noteValue={note.text}
        onInputChange={handleInputChange}
        onNoteAdded={handleNoteAdded}
      />
      <NotesContainer notesArray={notes} onNoteDelete={handleNoteDelete} />
    </>
  );
};

export default NotesApp;
