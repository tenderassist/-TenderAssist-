import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const AdminHome: NextPage = () => {
  return (
    <div>
      <div id="middle">
        <h1>"TenderAssist"</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a class="active">Home</a>
          </li>

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

      <h2>Welcome to "TenderHelper" Admin Mode</h2>
      <h3>What is "TenderHelper"?</h3>
      <p>
        "TenderAssist" is a web-based application used to assist you with the
        vast amounts of admin presented during tenders.
      </p>

      <h3>What is the Admin Mode?</h3>
      <p>
        Admin mode has various other functions that "TenderHelper" performs to
        assist in the administration side of things. Normal users can not access
        these tasks.{" "}
      </p>

      <h3>How to use "TenderHelper"?</h3>
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

export default AdminHome;
