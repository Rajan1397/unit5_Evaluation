import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const formDetails = [
  // name, age, gender, department, salary details
  {
    id: 1,
    name: "Rajan",
    age: 54,
    gender: "male",
    department: "enginerring",
    salary: "1000",
    details: "earning code",
  },

  {
    id: 2,
    name: "Hritik",
    age: 14,
    gender: "male",
    department: "hr",
    salary: "1000",
    details: "earning money",
  },

  {
    id: 3,
    name: "Abhishek",
    age: 54,
    gender: "female",
    department: "enginerring",
    salary: "1000",
    details: "earning code",
  },

  {
    id: 4,
    name: "Rajan",
    age: 54,
    gender: "male",
    department: "enginerring",
    salary: "1000",
    details: "earning code",
  },

  {
    id: 5,
    name: "Rajan",
    age: 24,
    gender: "female",
    department: "enginerring",
    salary: "1000",
    details: "earning redux",
  },
];

const Page = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
const Card = styled.div`
  border: 5px solid black;
  hieght: fit-content;
  width: fit-content;
  padding: 10px;
  font-wight: bold;
`;

function Employess() {
  fetch(`http://localhost:3001/product`, {
    method: "POST",
    body: JSON.stringify(formDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  return (
    <Page>
      {formDetails.map((item) => {
        return (
          <Card key={item.id}>
            <p> name: {item.name}</p>
            <p>age: {item.age}</p>
            <p>gender: {item.gender}</p>
            <p>department: {item.department}</p>
            <p>salary: {item.salary}</p>
            <button>EDIT</button>
            <button>DELETE</button>
            <br />
            <Link to={`/Employees/${item.id}`}>More Details ..</Link>
          </Card>
        );
      })}
    </Page>
  );
}

export default Employess;
