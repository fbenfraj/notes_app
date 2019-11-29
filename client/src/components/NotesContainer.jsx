import React from "react";

import NoteItem from "./NoteItem";

const NotesContainer = props => {
  return (
    <>
      {props.notesArray.map(note => {
        return (
          <NoteItem
            key={note.id}
            text={note.text}
            onDeleteClick={() => props.onNoteDelete(note.id)}
            onNoteUpdate={(e, newText) => props.onNoteChange(e, note.id, newText)}
          />
        );
      })}
    </>
  );
};

export default NotesContainer;
