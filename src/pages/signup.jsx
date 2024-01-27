import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const inputField = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  // sign up new user

  const signUpWithEmail = (e) => {
    e.preventDefault();

    localStorage.setItem("userdata", JSON.stringify(userData))

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        navigate("/home");
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
          <form onSubmit={signUpWithEmail}>
            <h1>sign up</h1>
            <Input
              id="username"
              required={true}
              onChange={(e) => inputField(e.target.id, e.target.value)}
              label="user name"
              type="text"
              placeholder="Type your user name"
            />
            <br />
            <br />
            <Input
              id="email"
              required={true}
              onChange={(e) => inputField(e.target.id, e.target.value)}
              label="email"
              type="email"
              placeholder="Type your email"
            />
            <br />
            <br />
            <Input
              id="password"
              required={true}
              onChange={(e) => inputField(e.target.id, e.target.value)}
              label="password"
              type="password"
              placeholder="Type your password"
            />

            <Button type={"submit"} buttonText="sign up" />
            <p
              style={{ fontSize: "18px", marginBottom: "30px" }}
              className="text"
            >
              alredy a user ?
            </p>
            <Link to="/login" id="link2">
              log in
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
