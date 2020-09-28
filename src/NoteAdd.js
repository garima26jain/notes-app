import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const NoteAdd = ({ addNote }) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const { title, content } = note;

  const expandIt = () => {
    setExpand(true);
  };

  const original = () => {
    setExpand(false);
  };

  //passing data from child to parent
  const addEvent = () => {
    addNote(note);
    setNote({
      title: "",
      content: ""
    });
  };

  const handleChange = name => e => {
    const val = e.target.value;
    setNote({ ...note, [name]: val });
  };

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              onChange={handleChange("title")}
              value={title}
            />
          ) : null}
          <textarea
            rows=""
            columns=""
            onChange={handleChange("content")}
            placeholder="Notes here"
            value={content}
            onClick={expandIt}
            onDoubleClick={original}
          />
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default NoteAdd;
