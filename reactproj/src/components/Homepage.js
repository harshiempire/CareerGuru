import React from "react";
import Navbar from "./Navbar";
import homeimg from "../assets/images/image1.png";
import dashimg from "../assets/images/dashboard.png";
import "./css/style.css";
import { NavLink } from "react-router-dom";

// const linearGradient =
//   "linear-gradient(200deg ,rgb(0, 102, 255),rgb(0, 204, 255));";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="p-3 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-items-between">
            <div>
              <h1 className="headtext">Stuck deciding your career?</h1>
              <p className="lead my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi libero sequi sed, unde ad veritatis molestias mollitia
                tempore similique suscipit molestiae odio rem ea, fugiat tempora
                temporibus, totam illum deserunt. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cumque, inventore?Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Fugiat nisi ullam
                a aperiam autem at mollitia explicabo similique provident eum?
              </p>
              <NavLink
                className="btn btn-primary text-white btn-lg"
                // style={{
                //   backgroundImage: linearGradient,
                // }}
                to="/signup"
              >
                Get Started
              </NavLink>
            </div>
            <img
              className="img-fluid w-50 d-none d-md-block"
              src={homeimg}
              alt="showcaseimage"
            />
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-2">
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor: "linear-gradient(200deg, #bad0e4, #5090cc);",
                }}
              >
                <div className="card-body text-center">
                  <h1>2L+</h1>
                  <p>Users on the platform</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor:
                    "linear-gradient(200deg,rgb(58, 83, 227),rgb(0, 153, 255));",
                }}
              >
                <div className="card-body text-center">
                  <h1>1K+</h1>
                  <p>So many more who secured their dream job</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor:
                    "linear-gradient(200deg,rgb(77, 75, 81),rgb(41, 40, 43));",
                }}
              >
                <div className="card-body text-center">
                  <h1>10K+</h1>
                  <p>Satisfied job seekers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* <!-- two sections --> */}
      <section id="knowmore" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={dashimg} className="img-fluid" alt="dashboardimg" />
            </div>
            <div className="col-md p-4">
              <h2>Lorem blah blah blah</h2>

              <p className="lead">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="howto" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-4">
              <h2>Lorem blah blah blah</h2>

              <p className="lead">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet.
              </p>
            </div>
            <div className="col-md">
              <img src={dashimg} className="img-fluid" alt="dashboardimg" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Q&A --> */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-1"
              >
                Why CareerGuru?
              </button>
            </h2>
            <div
              id="question-1"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptatum dolores accusamus quasi veniam, recusandae
                minus molestiae rerum vel temporibus unde alias magni soluta
                repudiandae nihil autem, enim quae magnam aperiam quis ipsum
                maiores repellat. Laboriosam reprehenderit, dolorem cum eveniet
                cupiditate architecto impedit velit? Dolore autem cum quod
                similique atque!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-2"
              >
                Why CareerGuru?
              </button>
            </h2>
            <div
              id="question-2"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptatum dolores accusamus quasi veniam, recusandae
                minus molestiae rerum vel temporibus unde alias magni soluta
                repudiandae nihil autem, enim quae magnam aperiam quis ipsum
                maiores repellat. Laboriosam reprehenderit, dolorem cum eveniet
                cupiditate architecto impedit velit? Dolore autem cum quod
                similique atque!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-3"
              >
                Why CareerGuru?
              </button>
            </h2>
            <div
              id="question-3"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptatum dolores accusamus quasi veniam, recusandae
                minus molestiae rerum vel temporibus unde alias magni soluta
                repudiandae nihil autem, enim quae magnam aperiam quis ipsum
                maiores repellat. Laboriosam reprehenderit, dolorem cum eveniet
                cupiditate architecto impedit velit? Dolore autem cum quod
                similique atque!
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ContactUs and info --> */}
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">main Location:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">main Location:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">main Location:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">main Location:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">main Location:</span>50 main strrn
                  ostonst
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="p-3 text-white bg-dark position-relative" id="contact">
        <div className="container">
          <p className="lead">Copyright &copy; 2022 CareerGuru</p>
        </div>
      </footer>
      {/* <!-- <div className="container-fluid d-flex flex-row-md flex-col-sm mb-3"> */}
    </div>
  );
};

export default Homepage;
