import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Employees from "./Components/Employees";
import { Login } from "./Components/Login";
import EmployeesDetails from "./Components/EmployeesDetails";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employees" element={<Employees />} />

          <Route path="/Employees/:employeeId" element={<EmployeesDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
