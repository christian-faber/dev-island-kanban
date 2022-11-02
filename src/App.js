import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";

export const App = () => {
  return (
    <div className="p-5 w-96 h-96 border-solid border-2 border-red flex flex-row">
      <Sidebar />
      <div className="w-80 h-80 border-blue border">
        <Top />
        <Board />
      </div>
    </div>
  );
};

export default App;
