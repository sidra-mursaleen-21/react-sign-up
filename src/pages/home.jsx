import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  return (
    <>
      <div className="homeContainer">
        <div className="home">
          <p>Name : {userData.username}</p>
          <p>Email : {userData.email}</p>
        </div>
      </div>
    </>
  );
}
