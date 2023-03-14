import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return(
        <>
        <div class="nanny">
      
      <div class="form-box">
      <img src="/Photos/nannylogoicon.png" class="nanny_icon"/>
        <form id="login" class="input-group" onSubmit={signIn}>
        <h1 id="form_Title">Login</h1>
          <input type="text" class="input-field" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input type="password" class="input-field" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button type="submit" class="submit-btn">Sign In</button>
        </form>
        </div>
    </div>
    </>
    )  
}

export default Login;

