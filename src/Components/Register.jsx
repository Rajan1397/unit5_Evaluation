import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { login, logout } = React.useContext(AuthContext);

  const navigate = useNavigate();
  const [formDetails, setFormDetails] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
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

    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // if there is no error we will login
        !res.error ? login() : logout();
      })
      .then(() => alert("You are registered successly"))
      .then(() => navigate("/Login"));
    // once login successful programmatically redirect to the homepage
  };
  const { name, email, password, username, mobile, description } = formDetails;

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        value={name}
      />

      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={email}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={password}
      />
      <br />
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
        name="mobile"
        placeholder="Enter mobile no"
        onChange={handleChange}
        value={mobile}
      />
      <br />

      <input
        type="text"
        name="description"
        placeholder="Enter description"
        onChange={handleChange}
        value={description}
      />
      <br />

      <button onClick={handleSubmit}>Register here</button>
    </>
  );
}
