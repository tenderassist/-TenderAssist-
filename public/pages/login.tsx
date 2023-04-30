import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const LoginPage: NextPage = () => {
  let router = useRouter();

  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      LogRedierct();
    }
  };
  //---------------------------------------------------

  function LogRedierct() {
    const loginfo = {
      uname: loginusername.value,
      pword: loginpassword.value,
    };

    if (loginfo.uname == "admin" && loginfo.pword == "admin2023") {
      console.log("admin logged in");
      router.push("/admin_home");
    } else if (loginfo.uname == "user" && loginfo.pword == "user2023") {
      console.log("user logged in");
      router.push("user_home");
    } else {
      document.getElementById("incorrectindexreturn").innerHTML =
        "Incorrect Username or Password!!!";
    }
  }

  return (
    <div name="middle">
      <h1>"TenderAssist"</h1>
      <br />
      <br />
      <label>Username:</label>
      <input type="text" id="loginusername" placeholder="Enter username" />
      <br />
      <br />
      <label>Password:</label>
      <input
        type="password"
        id="loginpassword"
        placeholder="Enter password"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <br />
      <p id="incorrectindexreturn"></p>

      <button id="btnLogin" onClick={LogRedierct}>
        Submit
      </button>
    </div>
  );
};

export default LoginPage;
