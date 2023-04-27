import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import { Route, Routes } from "react-router";
import Alert from './components/Alert';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Router,
//   Link
// } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(false);
  const [mode, setMode] = useState('light');

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  // router
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,

  //   },
  //   {
  //     path: "/About",
  //     element: <div>About</div>

  //   },
  // ]);

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#f8f9ff';
      showAlert('dark', 'Light Mode Enabled!')

    } else {
      setMode('dark')
      showAlert('secondary', 'Dark Mode Enabled!')
      document.body.style.backgroundColor = '#212529';
    }

  }
  return (
    <>
      <BrowserRouter>
          <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<TextForm />}/>
          <Route exact path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
