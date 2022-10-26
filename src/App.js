import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";

function App() {
  return (
    <div className="border-solid border-2 flex flex-row">
      <Sidebar />
      <div>
        <Top />
        <Board />
      </div>
    </div>
  );
}

export default App;
