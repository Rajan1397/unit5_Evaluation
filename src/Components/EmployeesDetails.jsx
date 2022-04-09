import React, { useEffect, useState } from "react";

function EmployeesDetails() {
  const [EmployeeDetails, setEmployeesDetails] = useState([]);
  const [isError, setError] = useState(false);

  const { id, name, gender, department, salary } = EmployeeDetails;
  useEffect(() => {
    setEmployeesDetails(EmployeeDetails);
  }, []);

  return isError ? (
    <h1>this Employees is not available</h1>
  ) : (
    <div>
      <h2>Employee Id :{EmployeeDetails.id}</h2>
      <h2>Employee name : {EmployeeDetails.name}</h2>
      <h2> Employee : {EmployeeDetails.gender}</h2>
      <h2> Employee gender : {EmployeeDetails.department}</h2>
      <h2> Employee salary : {EmployeeDetails.salary}</h2>
    </div>
  );
}

export default EmployeesDetails;
