import React from "react";
import "./styles.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = ({ title, content, deleteItem, id }) => {
  const DeleteNote = () => {
    deleteItem(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <br />
      <p>{content}</p>
      <button className="btn" onClick={DeleteNote}>
        <DeleteOutlineIcon className="deleteIcon" />
      </button>
    </div>
  );
};

export default Note;
