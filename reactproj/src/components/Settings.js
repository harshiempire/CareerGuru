import React from "react";
import Sidebar from "./Sidebar";
import Setting from "./Setting";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Settings = () => {
  // const [joblist, setJobList] = useState([]);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const callDashboard = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log(res);
      console.log(data);
      setUserData(data);
      if (!(res.status === 200)) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  // const getData = async () => {
  //   const res = await axios.get("/getdata");
  //   console.log(res.status);
  //   if (res.status === 200) {
  //     console.log(res.data);
  //     setJobList(res.data);
  //   }
  // };

  useEffect(() => {
    callDashboard();
    // getData();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar name={userData.name} />
          <div className="col-lg-9 matter ">
            <div className="row">
              <div className="col-lg topbar border border-dark">
                <h2>Settings</h2>
              </div>
              <div className="col-lg-10 catter">
                <Setting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
