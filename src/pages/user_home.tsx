import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const UserHome: NextPage = () => {
  return (
    <div>
      <div name="middle">
        <h1>"TenderAssist"</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a class="active">Home</a>
          </li>

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

      <h2>Welcome to "TenderAssist"</h2>
      <h3>What is "TenderAssist"?</h3>
      <p>
        "TenderAssist" is a web-based application used to assist you with the
        vast amounts of admin presented during tenders.
      </p>

      <h3>How to use "TenderAssist"?</h3>
      <p>
        To perform one of the various tasks "TenderAssist" performs, the user
        simply needs to click on the respective task that can be seen in the
        navigation bar above and follow the instruction on screen.. For example,
        if a temp would like to check a box out to a client, the temp should
        hover the mouse of the "Box in/out" text in the navigation bar and then
        click the "Box out" button presented.
      </p>

      <h3>Why "TenderHelper"?</h3>
      <p>
        Instead of wasting time scrolling through excel spreadsheets looking for
        offices etc. "TenderAssist" helps temps record the whole process at a
        much faster and accurate manner.
      </p>
    </div>
  );
};

export default UserHome;
