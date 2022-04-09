import { React, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: "flex";
  font-size: 26px;
  margin: "5px auto 5px auto";
  height: 100px;
  background-color: lightblue;
  width: 100vw;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px 20px 10px 20px;
  height: 50px;
  width: 200px;
  background-color: orange;
  border-radius: 5px;
`;

const AllLinks = styled(Link)`
  margin: 20px;
`;

export default function Navbar() {
  const { isAuth, token } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <>
      <Div>
        <AllLinks to="/">
          <Button>Home</Button>
        </AllLinks>
        <AllLinks to="/Register">
          {isAuth === true ? null : <Button>Register</Button>}
        </AllLinks>
        <AllLinks to="/Login">
          {isAuth === true ? <Button>Logout</Button> : <Button>Login</Button>}
        </AllLinks>
        <AllLinks to="/Employees">
          <Button>Employees</Button>
        </AllLinks>
      </Div>
    </>
  );
}
