import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import signimg from "../assets/images/sign.png";
// import "./css/style.css";
import "./css/sign.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pwsd: "",
    cpwsd: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    //[] to show that it is to be dynamically changed
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, pwsd, cpwsd } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        pwsd,
        cpwsd,
      }),
    });
    const data = await res.json();
    console.log(res);
    if (res.status === 422 || !data) {
      // window.alert("invalid registration");
      Swal.fire("Something went wrong", "invalid registration", "error");
      console.log("failed signup");
    } else {
      // window.alert("valid registration");
      Swal.fire("User created", "valid registration", "success");
      console.log("success signup");

      navigate("/form");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="form mt-lg-5 my-4 mx-5">
        <div className="container">
          <div className="row no-gutters shadow-lg">
            <div
              className="col-7 d-none d-lg-block pl-4 mt-4"
              style={{ borderRadius: "30px!important" }}
            >
              <img src={signimg} className="img-fluid p-5" alt="" />
            </div>
            <div className="col-lg-5 px-5 pt-5 text-md-start text-center">
              <h1 className="fw-bold py-3">Sign Up</h1>
              <form method="POST">
                <div className="col">
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control my-3 p-2"
                      autocomplete="off"
                      value={user.name}
                      name="name"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      className="form-control my-3 p-2"
                      autocomplete="off"
                      value={user.email}
                      name="email"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="password"
                      placeholder=" Enter your Password"
                      className="form-control my-3 p-2"
                      autocomplete="off"
                      value={user.pwsd}
                      name="pwsd"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="password"
                      placeholder="Confirm your Password"
                      className="form-control my-3 p-2"
                      autocomplete="off"
                      value={user.cpwsd}
                      name="cpwsd"
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="col">
                  {/* <a
                    href="/form"
                    className="btn btn1 mb-4 mt-3 sbtn"
                    type="button"
                  >
                    SignUp
                  </a> */}
                  <input
                    type="submit"
                    className="btn btn1 mb-4 mt-3 sbtn"
                    value="register"
                    onClick={PostData}
                  />
                </div>
                <div className="col mb-3 pb-2">
                  <NavLink className="" to="/login">
                    Already have an Account?
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
