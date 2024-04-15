import React from "react";
import "./App.css"; // Assuming you have a CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="numbers">
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>
      <div className="content">
        <div className="message">
          <p>Message</p>
        </div>
        <div className="buttons">
          <button>Pre</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
