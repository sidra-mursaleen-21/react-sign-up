import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const logInWithEmail = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you don't have any acount plz sign up");
      });
  };

  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <h1>login</h1>

          <Input
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            type="email"
            placeholder="Type your email"
          />
          <br />
          <br />
          <Input
          onChange={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            placeholder="Type your password"
          />
          <Button onClick={() => logInWithEmail()} buttonText="log in" />
          <p style={{ marginBottom: "20px" }} className="text">
            or sign up using
          </p>
          <Link to="/" id="link2">
            sign up
          </Link>
        </div>
      </div>
    </>
  );
}
