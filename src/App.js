import UserList from "./components/UserList.js";
import AddUser from  "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}></Route>
      <Route path="/add" element={<AddUser/>}></Route>
      <Route path="/edit/:id" element={<EditUser/>}></Route>
    </Routes>
    </BrowserRouter>
   
      
  );
}

export default App;
