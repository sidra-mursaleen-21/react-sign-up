import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const inputField = (key, value) => {
    setUserData({ ...userData, [key]: value });

  };
  
  // sign in existing user
  
  const logInWithEmail = (e) => {
    e.preventDefault();
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you don't have an acount plz sign up");
      });
  };

  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <form onSubmit={logInWithEmail}>
            <h1>login</h1>

            <Input
              id="email"
              required={true}
              onChange={(e) => inputField(e.target.id,e.target.value)}
              label="email"
              type="email"
              placeholder="Type your email"
            />
            <br />
            <br />
            <Input
              id="password"
              required={true}
              onChange={(e) => inputField(e.target.id,e.target.value)}
              label="password"
              type="password"
              placeholder="Type your password"
            />
            <Button type="submit" buttonText="log in" />
            <p style={{ marginBottom: "20px" }} className="text">
              or sign up using
            </p>
            <Link to="/" id="link2">
              sign up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
