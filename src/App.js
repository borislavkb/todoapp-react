import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <input type="text" id="form-input" name="form-input" />
        <button className="form-btn" type="submit">
          Add to do
        </button>
      </form>
      <ul>
        <li>This is a to do</li>
        <li>This is a to do</li>
        <li>This is a to do</li>
        <li>This is a to do</li>
      </ul>
    </div>
  );
}

export default App;
