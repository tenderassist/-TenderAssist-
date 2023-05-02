import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const CheckOutstandingPage: NextPage = () => {
  async function OutstandingBoxSpecial() {
    const date = new Date();
    const datecheck = date.getTime();
    const dateadded = datecheck + 2500000;
    const searchparamBox =
      "boxlastcheckout > boxlastcheckin && boxlastcheckin <= " + dateadded;

    const boxresultList = await pb
      .collection("boxes")
      .getFirstListItem(searchparamBox);

    const outstandingBoxNumData = boxresultList.boxnum;
    const outstandingBoxOffData = boxresultList.boxlastoffice;

    document.getElementById("outstandingboxreturn").innerHTML =
      "Box: " + outstandingBoxNumData + "; Office: " + outstandingBoxOffData;

    const searchparamSpec =
      "speciallastcheckout > speciallastcheckin && speciallastcheckout <= " +
      dateadded;
    const specialresultList = await pb
      .collection("specials")
      .getFirstListItem(searchparamSpec);

    const outstandingSpecialNumData = specialresultList.specialnum;
    const outstandingSpecialOffData = specialresultList.speciallastoffice;

    document.getElementById("outstandingspecreturn").innerHTML =
      "Special: " +
      outstandingSpecialNumData +
      "; Office: " +
      outstandingSpecialOffData;
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

          <Link href={"searchoffice"}>
            <li>
              <a>Office Search</a>
            </li>
          </Link>

          <Link href={"summary"}>
            <li>
              <a>Office Summary</a>
            </li>
          </Link>

          <li>
            <a class="active">Check Outstanding</a>
          </li>
        </ul>
      </nav>

      <div name="middle">
        <h2>Check Outstanding Boxes/Specials</h2>
        <p>
          Please click the button below to check if there are any boxes/specials
          that have not been returned yet
        </p>
        <br />
        <p>Outstanding box: E.g. "(Box number) Office number": </p>
        <p name="feedback" id="outstandingboxreturn"></p>
        <br />
        <p>Outstanding Special: E.g. "(Special number) Office number": </p>
        <p name="feedback" id="outstandingspecreturn"></p>

        <br />
        <button id="btnOutstanding" onClick={OutstandingBoxSpecial}>
          Search
        </button>
      </div>
    </div>
  );
};

export default CheckOutstandingPage;
