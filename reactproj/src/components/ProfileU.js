import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [container, setContainer] = useState([]);
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    desiredSkills: [],
    location: "",
    yearsOfExperience: "",
    jobDescription: "",
  });
  const handleOnChange = (e) => {
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

  const handleDesiredSkillsChange = (e) => {
    setFormData({
      ...formData,
      desiredSkills: e.target.value.split(","),
    });
  };

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
            name="name"
            value={formData.name}
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
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
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
          Update
        </button>
        <button type="reset" className="ms-2 btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
};
