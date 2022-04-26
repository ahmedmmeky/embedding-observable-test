import logo from "./logo.svg";
import Breakout from "./Breakout";
import ThreeJs from "./ThreeJs";
import Mike from "./Mike";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Make sure to scroll to check out some other snippets!</h1>
      <div>
        {" "}
        <h2>
          Clicking the image below will open a new page to play a cool game!
        </h2>
        <Breakout />
      </div>
      <div className="cropper">
        <h2>Click and hold on the box and whiggle your mouse around</h2>
        <h2>Use your mouse wheel to zoom in and out</h2>
        <ThreeJs />
      </div>
      <div>
        <h2>Hover over these dots for some info :)</h2>
        <Mike />
      </div>
    </div>
  );
}

export default App;
