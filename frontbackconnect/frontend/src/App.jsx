import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("/api/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <p>No of employees {employees.length}</p>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h1>{`${employee.firstName} ${employee.lastName}`}</h1>
          <img src={employee.photo} alt="employee" />
        </div>
      ))}
    </>
  );
}

export default App;
