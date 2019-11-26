import React, { useState } from "react";
import "./EditPopup.css";

const Popup = props => {
  const [newText, setNewText] = useState(props.textValue);
  return (
    <div className="popup">
      <form className="popup-content">
        <input value={newText} onChange={e => setNewText(e.target.value)} />
        <button type="submit" onClick={e => props.onFinished(e, newText)}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Popup;
