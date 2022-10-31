<<<<<<< HEAD
import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";
import { Top } from "./components/Top";
import "./index.css";
// import InitialData from "./components/InitialData";
// import { Column } from "./components/Column";

function App() {
  //   state = InitialData;
  //   return this.state.columnOrder.map((columnID) => {
  //     const column = this.state.columns[columnID];
  //     const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

  //     return <Column key={column.id} column={column} tasks={tasks} />;
  //   });
  // }
  return (
    <div className="border-solid border-2 flex flex-row">
      <Sidebar />
      <div>
        <Top />
        <Board />
      </div>
    </div>
  );
=======
function App() {
  return <div>Hello World</div>;
>>>>>>> 96be5219a56ba0d1979615802c1c9e6ce0f8dd07
}

export default App;
