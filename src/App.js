import "./App.css";
import { useState } from "react";
import { setConstantValue } from "typescript";

export default function App() {
  const notes = ["cook", "code"];

  const [data, setData] = useState();

  const listNoteItem = data.map((textContent, index) => {
    return <NoteListItem key={index} text={textContent} />;
  });

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.noteItem.value);

    const form = event.target;
    const input = form.noteItem;
    const newNoteItem = input.value;
    console.log(newNoteItem);

    const newNoteArr = [...data, newNoteItem];
    setData(newNoteArr);
  }

  return (
    <div className="App">
      <h1> To do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="noteItem"
          name="noteItem"
          placeholder="Add new note"
          required
        />
        <button type="Submit">Add</button>
      </form>
      <ul>{listNoteItem}</ul>
    </div>
  );
}

function NoteListItem({ text }) {
  return <li>{text}</li>;
}
