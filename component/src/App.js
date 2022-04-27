// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Address from "./Component/Profile/Address.js";
import FullName from "./Component/Profile/FullName.js";
import ProfilePhotos from "./Component/Profile/ProfilePhoto.js";

function App() {
  return (
    <div className="App">
      <ProfilePhotos />
      <hr />
      <FullName />
      <Address />
      <hr />
    </div>
  );
}

export default App;
