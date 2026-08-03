import { Route, Routes } from "react-router";
import './App.css'
import { TodoPage } from "./pages/HomePage";

function App() {

  return (
   <Routes>
    <Route path="/" element={<TodoPage/>} />
   </Routes>
  );
}

export default App
