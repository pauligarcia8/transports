import React, { useEffect, useState } from "react";
import "../styles/pages/UsPage.css";

const UsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    };
    loadEmployees();
  }, []);

  return (
    <main className="holder">
      <div className="history">
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="people">
          {loading ? (
            <p>Loading...</p>
          ) : (
            employees.map((employee, index) => (
              <div className="person" key={index}>
                <img src={employee.image} alt={employee.name} />
                <h5>{employee.name}</h5>
                <h6>{employee.position}</h6>
                <p>{employee.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default UsPage;
