import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const AddOfficePage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      AddOffice();
    }
  };
  //---------------------------------------------------

  async function AddOffice() {
    const offnumgiven = offnumadd.value;

    const editofficedata = {
      officenum: offnumgiven,
    };

    const record = await pb.collection("offices").create(editofficedata);

    document.getElementById("addofficereturn").innerHTML =
      "Successfuly added Office " + offnumgiven;
    document.getElementById("offnumadd").value = "";
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

          <li>
            <a class="active">Add Offices</a>
          </li>

          <Link href={"updateoffices"}>
            <li>
              <a>Update Offices</a>
            </li>
          </Link>

          <Link href={"user_home"}>
            <li>
              <a>Switch to User Mode</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div name="middle">
        <h2>Add Office</h2>
        <p>Please enter the office number you would like to add below</p>
        <br />
        <label>Office Number: </label>
        <input
          id="offnumadd"
          name="offnumadd"
          placeholder="E.g. '3'"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="addofficereturn"></p>

        <button id="btnAddOffice" onClick={AddOffice}>
          Add Office
        </button>
      </div>
    </div>
  );
};

export default AddOfficePage;
