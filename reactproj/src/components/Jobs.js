import React, { useState } from "react";
import Swal from "sweetalert2";
import Multiselect from "multiselect-react-dropdown";

const Form = () => {
  const [container, setContainer] = useState([]);
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
  const [desiredSkills, setSkills] = useState([""]);
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    desiredSkills: [""],
    location: "",
    yearsOfExperience: "",
    jobDescription: "",
  });
  const handleOnChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setContainer(data);
    console.log(container);
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire("SUCCESS!", "Login successful", "success");
    } else {
      // window.alert("Invalid Crdentials");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Crdentials",
      });
      // window.alert("Login successful");
    }
  };

  // const handleDesiredSkillsChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     desiredSkills: e.target.value.split(","),
  //   });
  // };

  //   const handleReset = () => {
  //     setFormData();
  //   };

  return (
    <div className="container mt-4">
      <form>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            placeholder="Enter role"
            name="role"
            value={formData.role}
            onChange={handleOnChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="desiredSkills">Desired Skills</label>
          <input
            type="text"
            className="form-control"
            id="desiredSkills"
            placeholder="Enter desired skills"
            name="desiredSkills"
            value={formData.desiredSkills.join(",")}
            onChange={handleDesiredSkillsChange}
          />
        </div> */}
        <div className="text-dark">
          <label htmlFor="desiredSkills">Desired Skills</label>
          <Multiselect
            isObject={false}
            name="skills"
            onRemove={(event) => {
              setSkills(event);
              console.log(event);
              setFormData({ ...formData, desiredSkills });
            }}
            onSelect={(event) => {
              setSkills(event);
              console.log(event);
              setFormData({ ...formData, desiredSkills });
              // console.log("skills=", skills);
            }}
            options={options}
            showCheckbox
            selectionLimit={7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter the Location"
            name="location"
            value={formData.location}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearsOfExperience">Years of Experience</label>
          <input
            type="text"
            className="form-control"
            id="yearsOfExperience"
            placeholder="Enter years of experience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            className="form-control"
            id="jobDescription"
            rows="3"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button type="reset" className="ms-2 btn btn-primary">
          Reset
        </button>
      </form>
      <div>
        <div className="row mt-1 mb-3 mx-1 p-3 border border-right border-dark">
          <div className="col-2">
            <div className="border border-dark h-100  bg-warning-subtle"></div>
          </div>
          <div className="col-7">
            <div className="container">
              <h3>{container.companyName}</h3>
              <p className="p-1">{container.desiredSkills}</p>
            </div>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-dark text-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              <i className="bi bi-caret-right-fill"></i>
              <span className="d-none d-md-block"> Show More </span>
            </button>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <div
                      className="modal-title h-1 fs-5"
                      id="exampleModalLabel"
                    ></div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row mt-1 mb-3 mx-5 py-3 border border-dark">
                      <div className="col-10">
                        <div className="container">
                          <h3>{container.role}</h3>
                          <p className="p-1">{container.companyName}</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="border mx-2 border-dark h-100"></div>
                      </div>
                    </div>
                    <div className="mx-5">
                      <div className="fs-5 p-3">
                        <span className="fw-bold">Role:</span>
                        {container.role}
                      </div>
                      <div className="fs-5 p-3">
                        <span className="fw-bold">Desired Skills:</span>
                        {container.desiredSkills}
                      </div>
                      <div className="fs-5 p-3">
                        <span className="fw-bold">Years of Experience:</span>
                        {container.yearsOfExperience}
                      </div>
                      <div className="fs-5 p-3">
                        <span className="fw-bold">Job Description:</span>
                        {container.jobDescription}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
