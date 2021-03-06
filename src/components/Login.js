import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validation from "../validation/validation";

import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { push } = useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    e.preventDefault();
    axios
      .post(
        "https://bw-water-my-plants-backend.herokuapp.com/api/auth/login",
        values
      )
      .then((resp) => {
        console.log("login : resp = ", resp);
        console.log("login : resp.data = ", resp.data.token);
        localStorage.setItem("token", resp.data.token);
        push("/products"); //Change after making the plants page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div className="login-dev">
      <div className="box">
        <div className="app-wrap">
          <h1 className="login">Login</h1>
        </div>
        <form className="form-wrap">
          <label>
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="text"
              placeholder="Username"
              className="iput"
              name="username"
              value={values.username}
              onChange={inputChange}
            />
          </label>
          <label>
            {errors.password && <p className="error">{errors.password}</p>}
            <input
              type="text"
              placeholder="Password"
              className="iput"
              name="password"
              value={values.password}
              onChange={inputChange}
            />
          </label>
        </form>
        <div>
          <button className="button" onClick={formSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
