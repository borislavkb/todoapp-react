import "./App.css";

function App() {
  return (
    <header>
    <div className="App">
      <form>
        <input type="text" 
          id="fname" 
          name="fname"
          placeholder="Add your to-do"
          />
        <button type="submit">ADD TO DO</button>
      </form>


    </div>
    </header>
    <main className="container">
    <div className="container-div">
      <h2 className="Todo">This is a to d</h2>
    </div>

    </main>
  );
}

