import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2500/login", { email, password })

      .then((result) => {
        console.log(result);
        if(result.data === 'success'){
          
        }

        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-sky-50  vh-100">
        <div className="bg-white border p-3 rounded w-25">
          <h2 className="text-3xl text-gray-600">Login</h2>
          <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Login
            </button>
          </form>
          <p>Already Have an Account ?</p>

          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
