import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
// import "./css/style.css";
import "./css/login.css";
import { NavLink } from "react-router-dom";
import logimg from "../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Swal from "sweetalert2";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pwsd: password,
      }),
    });

    const data = await res.json();
    console.log(res.status);
    if (res.status === 400 || !data) {
      // window.alert("Invalid Crdentials");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Crdentials",
      });
    } else {
      dispatch({ type: "USER", payload: true });
      // window.alert("Login successful");
      Swal.fire("SUCCESS!", "Login successful", "success");
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="form mt-lg-5 my-4 mx-5">
        <div className="container">
          <div className="row no-gutters shadow-lg">
            <div className="col-lg-5 px-5 pt-5 text-md-start">
              <h1 className="fw-bold py-3">Login</h1>
              <form method="POST">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email-Address"
                      className="form-control my-3 p-2"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="form-control my-3 p-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-5">
                    <NavLink to="/login">Forgot Password?</NavLink>
                  </div>
                  <div className="row pt-2">
                    <div className="col-6"></div>
                    <NavLink to="/signup" className="col-6">
                      Create a new Account!
                    </NavLink>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      value="Log In"
                      className="btn1 mb-4 mt-3 p-2"
                      onClick={loginUser}
                    />
                  </div>
                </div>
                {/* <div className="col">
                  <button className="btn1 mb-4 mt-3 p-2" type="button" href="">
                    Login
                  </button>
                </div> */}
                {/* <div className="col mb-3 pb-2">
                  <NavLink className="" href="/signup">
                    Don't have an account?
                  </a>
                </div> */}
              </form>
            </div>
            <div
              className="col-7 d-none d-lg-block pl-4 mt-4"
              style={{ borderRadius: "5px!important" }}
            >
              <img src={logimg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
