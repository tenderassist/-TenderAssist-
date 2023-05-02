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

    const officeCompany = officerecord.officecompany;
    const offsearchb1 = officerecord.offbox1;
    const offsearchb2 = officerecord.offbox2;
    const offsearchb3 = officerecord.offbox3;
    const offsearchb4 = officerecord.offbox4;
    const offsearchb5 = officerecord.offbox5;
    const offsearchs1 = officerecord.offspec1;
    const offsearchs2 = officerecord.offspec2;
    const offsearchs3 = officerecord.offspec3;
    var boxlist = "";
    var speclist = "";

    //Box list-------------------------------------------------
    if (offsearchb1 != 0) {
      boxlist = boxlist + " " + offsearchb1 + ", ";
    }
    if (offsearchb2 != 0) {
      boxlist = boxlist + " " + offsearchb2 + ", ";
    }
    if (offsearchb3 != 0) {
      boxlist = boxlist + " " + offsearchb3 + ", ";
    }
    if (offsearchb4 != 0) {
      boxlist = boxlist + " " + offsearchb4 + ", ";
    }
    if (offsearchb5 != 0) {
      boxlist = boxlist + " " + offsearchb5 + ", ";
    }

    //Spec list------------------------------------------------
    if (offsearchs1 != 0) {
      speclist = speclist + " " + offsearchs1 + ", ";
    }
    if (offsearchs2 != 0) {
      speclist = speclist + " " + offsearchs2 + ", ";
    }
    if (offsearchs3 != 0) {
      speclist = speclist + " " + offsearchs3 + ", ";
    }
    //---------------------------------------------------------

    document.getElementById("officereturninfo").innerHTML =
      "Office Number: " +
      offidsearch.value +
      "; Company: " +
      officeCompany +
      "; Currently has Boxes: " +
      boxlist +
      "and Specials: " +
      speclist;

    document.getElementById("offidsearch").value = "";
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

          <li>
            <a class="active">Office Search</a>
          </li>

          <Link href={"summary"}>
            <li>
              <a>Office Summary</a>
            </li>
          </Link>

          <Link href={"checkoutstanding"}>
            <li>
              <a>Check Outstanding</a>
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
