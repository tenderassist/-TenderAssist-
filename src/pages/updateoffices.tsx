import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const UpdateOfficePage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      UpdateOffice();
    }
  };
  //---------------------------------------------------

  async function UpdateOffice() {
    const offnumgiven = offnumupdate.value;
    const offcompgiven = offcompupdate.value;
    const searchoffnum = "officenum= " + offnumupdate.value;

    const officerecord = await pb
      .collection("offices")
      .getFirstListItem(searchoffnum);
    const offid = officerecord.id;

    const updateofficedata = {
      officenum: offnumgiven,
      officecompany: offcompgiven,
    };

    pb.collection("offices").update(offid, updateofficedata);

    document.getElementById("updateofficereturn").innerHTML =
      "Successfuly added " + offcompgiven + " to office " + offnumgiven;
    document.getElementById("offnumupdate").value = "";
    document.getElementById("offcompupdate").value = "";

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

          <Link href={"addoffices"}>
            <li>
              <a>Add Offices</a>
            </li>
          </Link>

          <li>
            <a class="active">Update Offices</a>
          </li>

          <Link href={"user_home"}>
            <li>
              <a>Switch to User Mode</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div name="middle">
        <h2>Update Office</h2>
        <p>Please enter the offices details below</p>
        <br />
        <label>Office Number: </label>
        <input id="offnumupdate" name="offnumupdate" placeholder="E.g. '3'" />
        <br />

        <label>Name of the company occupying the office: </label>
        <input
          id="offcompupdate"
          name="offcompupdate"
          placeholder="Enter company name"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="updateofficereturn"></p>

        <button id="btnUpdateOffice" onClick={UpdateOffice}>
          Update Office
        </button>
      </div>
    </div>
  );
};

export default UpdateOfficePage;
