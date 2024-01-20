import { RouterProvider } from "react-router-dom";
import { Router } from "./config/router";
import { initializeApp } from "firebase/app";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCisO_zXgX0LeTWKbH46MjuS7kz_0bdS18",
  authDomain: "react-signup-47ebf.firebaseapp.com",
  projectId: "react-signup-47ebf",
  storageBucket: "react-signup-47ebf.appspot.com",
  messagingSenderId: "369733037732",
  appId: "1:369733037732:web:3e339178ff87703d060031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <>  
       <Router />
    </>
  );
}

export default App;