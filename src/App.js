import React from "react";
import Navbar from "./components/layout/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddUser from "./components/users/AddUsers";
import EditUser from "./components/users/EditUsers";
import ViewUser from "./components/users/ViewUsers";

function App() {
  return (
    <div className="App">
    <Router>
       <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route  path = "/about" element={<About/>} />
      <Route  path = "/contact" element={<Contact/>} />
      <Route path="/users/Add" element={<AddUser/>} />
      <Route path="/users/EditUsers/:id" element={<EditUser/>} />    
      <Route path="/users/ViewUsers/:id" element={<ViewUser/>} />   
      
    </Routes>
       </Router>
    </div>
  );
}
export default App;
