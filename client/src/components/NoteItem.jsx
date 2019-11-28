import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import EditPopup from "./EditPopup/EditPopup";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";

const NoteItem = props => {
  const [text, setText] = useState(props.text);
  const [editMode, setEditMode] = useState(false);

  function updateText(e, newText) {
    e.preventDefault();
    setEditMode(false);
    setText(newText);
  }

  return (
    <span>
      <ReactMarkdown source={text} />
      <img
        src={editIcon}
        height="20px"
        width="20px"
        alt="edit"
        onClick={() => setEditMode(true)}
      />
      {editMode && <EditPopup textValue={text} onFinished={updateText} />}
      <img
        src={deleteIcon}
        height="20px"
        width="20px"
        alt="delete"
        onClick={() => props.onDeleteClick(props.id)}
      />
    </span>
  );
};

export default NoteItem;
