import { React, useContext, useState } from "react";
// from where we are the values of AuthContext
// it is not like we are importing AuthContext, we will always import AuthContextProvider instaead
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // from where we are taking the values
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formDetails);

    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        res.token ? navigate("/") : alert("Invalid Login Credentials");
        res.token && login();
      });
    // once login successful programmatically redirect to the homepage
  };
  const { username, password } = formDetails;

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={handleChange}
        value={username}
      />

      <br />
      <input
        type="text"
        name="password"
        placeholder="Enter password to login"
        onChange={handleChange}
        value={password}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};
