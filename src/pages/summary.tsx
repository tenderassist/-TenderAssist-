import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const SummaryOfficePage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      SummaryOffices();
    }
  };
  //---------------------------------------------------

  async function SummaryOffices() {
    const officenum = "officenum= " + offidsummary.value;

    const officerecord = await pb
      .collection("offices")
      .getFirstListItem(officenum);

    const officeBoxData = officerecord.offboxspecchecked;
    const officeCompany = officerecord.officecompany;

    document.getElementById("officereturnsummary").innerHTML =
      "Office Number: " +
      offidsummary.value +
      "; Company: " +
      officeCompany +
      "; Checkout History: " +
      officeBoxData;

    document.getElementById("offidsummary").value = "";
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

          <Link href={"boxout"}>
            <li>
              <a>Boxes Out</a>
            </li>
          </Link>

          <Link href={"boxin"}>
            <li>
              <a>Boxes In</a>
            </li>
          </Link>

          <Link href={"searchbox"}>
            <li>
              <a>Search Boxes/Specials</a>
            </li>
          </Link>

          <Link href={"searchbox"}>
            <li>
              <a>Office Search</a>
            </li>
          </Link>

          <li>
            <a class="active">Office Summary</a>
          </li>

          <Link href={"checkoutstanding"}>
            <li>
              <a>Check Outstanding</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div name="middle">
        <h2>Office Summary</h2>
        <p>Please enter the number of the office you are searching for</p>
        <br />
        <label>Office Number: </label>
        <input
          type="text"
          id="offidsummary"
          name="offidsummary"
          placeholder="E.g. '1'"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="officereturnsummary"></p>

        <br />

        <button id="btnOfficeSummary" onClick={SummaryOffices}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SummaryOfficePage;
