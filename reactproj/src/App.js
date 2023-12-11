// import logo from './logo.svg';
import React, { createContext, useReducer } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Table from "./components/Table";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/components/reducer/UseReducer";
import Jobs from "./components/Jobs";

export const UserContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/Jobs" element={<Jobs />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/table" element={<Table />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
