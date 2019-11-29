import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import './NotesInput.css';

const NotesInput = props => {

  function onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      props.onNoteAdded(e);
    }
  }

  return (
    <form onSubmit={e => props.onNoteAdded(e)}>
      <TextareaAutosize
        value={props.noteValue}
        type="text"
        placeholder="Enter your new note here."
        onChange={e => props.onInputChange(e.target.value)}
        onKeyDown={onEnterPress}
      />
      <button type="submit">OK</button>
    </form>
  );
};

export default NotesInput;
