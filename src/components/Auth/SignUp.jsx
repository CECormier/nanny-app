import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
   <>
    <div class="nanny">
  <div class="form-box">
  <img src="/Photos/nannylogoicon.png" class="nanny_icon"/>
    <form id="login" class="input-group" onSubmit={signUp}>
    <h1 id="form_Title">Register</h1>
      <input type="text" class="input-field" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      <input type="password" class="input-field" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
      <button type="submit" class="submit-btn">Sign Up</button>
    </form>
    </div>
</div>
</>
  );
};

export default SignUp;
