import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import EditPopup from "../EditPopup/EditPopup";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import './NoteItem.scss';

const NoteItem = props => {
  const [editMode, setEditMode] = useState(false);

  return (
    <span className="note-container">
      <ReactMarkdown source={props.text} />
      <img
        src={editIcon}
        height="20px"
        width="20px"
        alt="edit"
        onClick={() => setEditMode(true)}
      />
      {editMode && <EditPopup textValue={props.text} onFinished={(e, newText) => {
        props.onNoteUpdate(e, newText);
        setEditMode(false);
      }} />}
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
