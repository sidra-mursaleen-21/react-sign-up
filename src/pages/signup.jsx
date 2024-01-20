import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();

  const navigate = useNavigate();

  // sign up new user

  const signUpWithEmail = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        navigate('/home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("you already have an acount plz login");

        // ..
      });
  };

  return (
    <>
      <div className="maincontainer">
        <div className="container">
          <h1>sign up</h1>
          <Input
            onChange={(e) => setUserName(e.target.value)}
            label="user name"
            type="text"
            placeholder="Type your user name"
          />
          <br />
          <br />
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

          <Button onClick={() => signUpWithEmail()} buttonText="sign up" />
          <p
            style={{ fontSize: "18px", marginBottom: "30px" }}
            className="text"
          >
            alredy a user ?
          </p>
          <Link to="/login" id="link2">
            log in
          </Link>
        </div>
      </div>
    </>
  );
}
