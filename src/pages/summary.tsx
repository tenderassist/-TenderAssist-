import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const SearchOfficePage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      SearchOffices();
    }
  };
  //---------------------------------------------------

  async function SearchOffices() {
    const officenum = "officenum= " + offidsearch.value;

    const officerecord = await pb
      .collection("offices")
      .getFirstListItem(officenum);

    const officeBoxData = officerecord.offboxchecked;
    const officeSpecData = officerecord.offspecialchecked;
    const officeCompany = officerecord.officecompany;

    document.getElementById("officereturninfo").innerHTML =
      "Office Number: " +
      offidsearch.value +
      "; Company: " +
      officeCompany +
      "; Boxes Last Checked: " +
      officeBoxData +
      "; Specials Last Checked: " +
      officeSpecData;

    document.getElementById("offidsearch").value = "";
    window.location.reload;
  }

  return (
    <div>
      <div name="middle">
        <h1>"TenderAssist"</h1>
      </div>
      <nav>
        <ul>
          <Link href={"user_home"}>
            <li>
              <a>Home</a>
            </li>
          </Link>

          <Link href={"boxin"}>
            <li>
              <a>Boxes In</a>
            </li>
          </Link>

          <Link href={"boxout"}>
            <li>
              <a>Boxes Out</a>
            </li>
          </Link>

          <Link href={"searchbox"}>
            <li>
              <a>Search Boxes/Specials</a>
            </li>
          </Link>

          <li>
            <a class="active">Office Search</a>
          </li>

          <Link href={"checkoutstanding"}>
            <li>
              <a>Check Outstanding</a>
            </li>
          </Link>

          <Link href={"login"}>
            <li>
              <a>Switch to "Admin Mode"</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div name="middle">
        <h2>Office Search</h2>
        <p>Please enter the number of the office you are searching for</p>
        <br />
        <label>Office Number: </label>
        <input
          type="text"
          id="offidsearch"
          name="offidsearch"
          placeholder="E.g. '1'"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="officereturninfo"></p>

        <br />

        <button id="btnOfficeSearch" onClick={SearchOffices}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchOfficePage;
