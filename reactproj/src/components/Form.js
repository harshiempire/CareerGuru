import React from "react";
import fimg from "../assets/images/icons8-facebook-48.png";
import "./css/sform.css";
import Navbar from "./Navbar";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const [options, setOptions] = useState([
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C#",
    "Ruby",
    "Swift",
    "PHP",
    "Go",
    "Rust",
    "Kotlin",
    "TypeScript",
    "HTML/CSS ",
    "SQL ",
    "R ",
    "MATLAB ",
    "Perl",
    "Shell scripting languages (e.g., Bash)",
    "Dart ",
    "Scala",
    "Lua",
    "Haskell",
    "Objective-C ",
    "Assembly languages ",
    "COBOL ",
    "Lisp ",
    "Fortran ",
    "Julia ",
    "Groovy",
    "PHP",
    "Dart",
  ]);
  const [skills, setSkills] = useState([""]);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    pwsd: "",
    cpwsd: "",
    mobilenumber: "",
    loc: "hyderabad",
    exp: "0-1",
    skills: [""], // Include skills in the user object
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, pwsd, cpwsd, mobilenumber, loc, exp, skills } = user;

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
        mobilenumber,
        loc,
        exp,
        skills,
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

      navigate("/dashboard");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="tryfixed">
              <div className="container">
                <button
                  type="button"
                  id="googleSignIn"
                  className="btn-social-view g-btn"
                >
                  <img
                    src="https://img.icons8.com/bubbles/50/null/google-logo.png"
                    className="logoimg"
                    alt="hello"
                  />
                  Sign Up with Google
                </button>
                <button type="button" className="btn-social-view fb-btn">
                  <i>
                    <img src={fimg} className="logoimg" alt="hello" />
                  </i>
                  Sign Up with Facebook
                </button>
                <button type="button" className="btn-social-view linkedIn-btn">
                  <img
                    src="https://img.icons8.com/fluency/48/null/linkedin-2.png"
                    className="logoimg"
                    alt="hello"
                  />
                  Sign Up with LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 py-3 my-3">
            <h3 className="text-center m-4">Create an account</h3>
            <form method="POST">
              <div className="col">
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control my-3 p-2"
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
                    value={user.cpwsd}
                    name="cpwsd"
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="form-control my-3 p-2"
                    autoComplete="off"
                    value={user.mobilenumber}
                    name="mobilenumber"
                    onChange={handleInputs}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <label for="mobile">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number for"
                />
              </div> */}
              <div className="form-group">
                <label for="location">Current Location</label>
                <select
                  className="form-control"
                  id="location"
                  onChange={handleInputs}
                  value={user.loc}
                  name="loc"
                >
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Kolkata</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <div className="form-group">
                <label for="experience">Total Experience</label>
                <select
                  className="form-control"
                  id="experience"
                  onChange={handleInputs}
                  value={user.exp}
                  name="exp"
                >
                  <option>0-1</option>
                  <option>1-2</option>
                  <option>2-3</option>
                  <option>3-4</option>
                  <option>4-5</option>
                </select>
              </div>

              <div className="row">
                <div className="col-sm-12 mb-2">
                  <form className="row g-3" method="post">
                    <div className="col-md">
                      <label className="form-label"> Skills </label>

                      <div className="text-dark">
                        <Multiselect
                          isObject={false}
                          name="skills"
                          value={skills}
                          onRemove={(event) => {
                            setSkills(event);
                            console.log(event);
                            setUser({ ...user, skills });
                          }}
                          onSelect={(event) => {
                            setSkills(event);
                            console.log(event);
                            setUser({ ...user, skills });
                            // console.log("skills=", skills);
                          }}
                          options={options}
                          showCheckbox
                          selectionLimit={7}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-sm-12 mb-2">
                  <form className="row g-3" method="post">
                    <div className="col-md">
                      <label className="form-label"> Skills </label>

                      <div className="text-dark">
                        <Multiselect
                          isObject={false}
                          name="skills"
                          value={skills}
                          onRemove={(event) => {
                            setSkills(event);
                            console.log(event);
                          }}
                          onSelect={(event) => {
                            setSkills(event);
                            console.log(skills);
                          }}
                          options={options}
                          showCheckbox
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={PostData}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
