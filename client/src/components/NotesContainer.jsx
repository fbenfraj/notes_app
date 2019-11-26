import React from "react";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";

const NotesContainer = props => {
  return (
    <>
      {props.notesArray.map(note => {
        return (
          <span key={note.id}>
            <label>{note.text}</label>
            <img src={editIcon} height="20px" width="20px" alt="edit" />
            <img
              src={deleteIcon}
              height="20px"
              width="20px"
              alt="delete"
              onClick={() => props.onNoteDelete(note.id)}
            />
          </span>
        );
      })}
    </>
  );
};

export default NotesContainer;
