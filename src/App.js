import {Routes, Route} from 'react-router';
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Tourist from "./tourist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Tourist/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
