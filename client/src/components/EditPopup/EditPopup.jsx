import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import "./EditPopup.css";

const Popup = props => {
  const [newText, setNewText] = useState(props.textValue);

  function onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      props.onFinished(e, newText);
    }
  }

  return (
    <div className="popup">
      <form className="popup-content">
        <TextareaAutosize value={newText} onChange={e => setNewText(e.target.value)} onKeyDown={onEnterPress} />
        <button type="submit" onClick={e => props.onFinished(e, newText)}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Popup;
