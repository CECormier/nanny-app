//run json-server --watch ./src/Data/db.json to run server
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Home from './components/User/Home'
import Nanny from './components/User/ProfileNanny'
import Parents from './components/User/ProfileParent'
import Login from './components/User/Login'
import AuthDetails from './components/Auth/AuthDetails';
import SignUp from './components/Auth/SignUp';

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <div>
          <AuthDetails />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/nanny' element={<Nanny authUser={authUser}/>} />
          <Route path='/parents' element={<Parents />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
