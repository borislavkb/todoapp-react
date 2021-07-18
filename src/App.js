import "./App.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.noteItem.value);

    const form = event.target;
    const input = form.noteItem;
    const newNoteItem = input.value;
    console.log(newNoteItem);

    const newNoteArr = [...data, { textContent: newNoteItem, isDone: false }];
    console.log(newNoteArr);

    setData(newNoteArr); // State changes
    form.reset();
  }
  //Delete function

  function handleDeleteNote(item) {
    const deleteNotes = data.filter((item) => {
      return item.textContent !== item.textContent;
    });
    setData(deleteNotes);
  }

  //Note render
  const TodoItem = data.map((note, index, status) => {
    return <NoteListItem key={index} item={note} status={status} />;
  });

  //Generate the note
  function NoteListItem({ data, item, status, onClick }) {
    return (
      <div className="Note-div">
        <button onClick={handleDeleteNote} className="Delete-btn">
          X
        </button>
        <p className="noteContent">{item.textContent}</p>
      </div>
    );
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
        <button className="App-btn" type="Submit">
          Add
        </button>
      </form>
      <div className="Note-box">{TodoItem}</div>
    </div>
  );
}
