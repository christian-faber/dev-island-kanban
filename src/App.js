import React, { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { Page } from "./Page";
import { Start } from "./components/Start";
import { store } from "./store/store";
import { saveState } from "./localStorage";
export const LightContext = React.createContext();
export const BoardContext = React.createContext();

store.subscribe(() => {
  saveState({
    boards: store.getState().boards,
    columns: store.getState().columns,
    tasks: store.getState().tasks,
  });
});

export const App = () => {
  const [light, setLight] = useState(true);

  useEffect(() => {
    if (!light) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [light]);

  return (
    <LightContext.Provider value={{ light, setLight }} store={store}>
      <div className="font-jakarta overflow-x-auto bg-white dark:bg-gray-800">
        <Routes>
          <Route element={<Page />}>
            <Route path="/" element={<Start />} />
            <Route path="/:boardName" element={<Board />} />
          </Route>
        </Routes>
      </div>
      <div className="flex">
        <ShowSidebar />
      </div>
    </LightContext.Provider>
  );
};

export default App;
//after 32:
// return (
//   <LightContext.Provider value={{ light, setLight }} store={store}>
//     <div className="font-jakarta overflow-x-auto bg-white dark:bg-gray-800">
//       <Routes>
//         <Route element={<Page />}>
//           <Route path="/" element={<Start />} />
//           <Route path="/:boardName" element={<Board />} />
//         </Route>
//       </Routes>
//     </div>
//   </LightContext.Provider>
// );
// };

// export default App;
