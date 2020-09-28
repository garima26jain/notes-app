import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import NoteAdd from "./NoteAdd";
import Note from "./Note";

const App = () => {
  const [notesarr, setNotesarr] = useState([]);

  const addNote = note => {
    setNotesarr([...notesarr, note]);
  };

  const onDelete = id => {
    const filteredarr = notesarr.filter((note, i) => {
      return id !== i;
    });
    setNotesarr(filteredarr);
  };

  return (
    <div className="App">
      <Header />
      <NoteAdd addNote={addNote} />
      {notesarr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
