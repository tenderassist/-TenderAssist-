import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const AddTempPage: NextPage = () => {
  async function AddTemp() {
    const nametemp = tempfirstname.value;

    const data = {
      tempname: nametemp,
    };

    const record = await pb.collection("temps").create(data);

    document.getElementById("addtempreturn").innerHTML =
      "Successfuly added " + nametemp;
    document.getElementById("tempfirstname").value = "";
    window.location.reload;
  }

  return (
    <div>
      <div name="middle">
        <h1>"TenderAssist"</h1>
      </div>
      <nav>
        <ul>
          <Link href={"admin_home"}>
            <li>
              <a>Home</a>
            </li>
          </Link>

          <li>
            <a class="active">Add Temps</a>
          </li>

          <Link href={"deletetemp"}>
            <li>
              <a>Delete Temps</a>
            </li>
          </Link>

          <Link href={"addboxes"}>
            <li>
              <a>Add Boxes/Specials</a>
            </li>
          </Link>

          <Link href={"deleteboxes"}>
            <li>
              <a>Delete Boxes/Specials</a>
            </li>
          </Link>

          <Link href={"editoffices"}>
            <li>
              <a>Add Offices</a>
            </li>
          </Link>

          <Link href={"login"}>
            <li>
              <a>Switch to User Mode</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div name="middle">
        <h2>Add Temp</h2>
        <p>Please enter the temps details below</p>
        <br />
        <label>Name: </label>
        <input
          type="text"
          id="tempfirstname"
          name="tempfirstname"
          placeholder="Enter First Name"
        />
        <br />

        <p name="feedback" id="addtempreturn"></p>

        <button id="btnAddTemp" onClick={AddTemp}>
          Add Temp
        </button>
      </div>
    </div>
  );
};

export default AddTempPage;
