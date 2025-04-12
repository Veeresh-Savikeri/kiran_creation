import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="position-fixed top-50 start-50 p-3 rounded-3 w-50 border border-2 border-light"
        style={{
          zIndex: 1,
          backgroundColor: "rgba(0,0,0, 0.8)", // Transparent white background
          transform: "translate(-50%, -50%)", // Center the form
        }}
      >
        <form>
          <h2 className="text-end text-white pe-3">
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => {
                props.setLogin(false);
              }}
            ></i>
          </h2>
          <h3 className="text-center text-white mb-4 fw-bold">Admin Login</h3>
          <div data-mdb-input-init className="form-outline mb-4">
            <label
              className="form-label text-white fs-3"
              htmlFor="form2Example1"
            >
              User Name
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
                localStorage.setItem("username", e.target.value);
              }}
            />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label
              className="form-label text-white fs-3"
              htmlFor="form2Example2"
            >
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
                localStorage.setItem("password", e.target.value);
              }}
            />
          </div>

          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={() => {
              if (name === "admin" && password === "admin") {
                navigate("/private");
              } else {
                alert("Invalid credentials");
                props.setLogin(false);
              }
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
