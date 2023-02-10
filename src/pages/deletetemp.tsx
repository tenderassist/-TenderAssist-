import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const DeleteTempPage: NextPage = () => {
  async function DeleteTemp() {
    const nametemp = "tempname= '" + tempdelname.value + "'";

    let confirm = window.confirm("The temp will be permanently deleted");
    if (confirm) {
      const temprecord = await pb
        .collection("temps")
        .getFirstListItem(nametemp);

      const idfordel = temprecord.id;
      console.log(idfordel);
      pb.collection("temps").delete(idfordel);
      document.getElementById("deletetempreturn").innerHTML =
        "Successfully deleted temp " + tempdelname.value;
    }

    document.getElementById("tempdelname").value = "";
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

          <Link href={"addtemp"}>
            <li>
              <a>Add Temps</a>
            </li>
          </Link>

          <li>
            <a class="active">Delete Temps</a>
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
        <h2>Delete Temps</h2>
        <p>Please enter the name of the temp you would like to delete below</p>
        <br />
        <label>Name:</label>
        <input type="text" id="tempdelname" placeholder="Enter First Name" />
        <br />
        <p name="feedback" id="deletetempreturn"></p>

        <button id="btnDeleteTemp" onClick={DeleteTemp}>
          Delete Temp
        </button>
      </div>
    </div>
  );
};

export default DeleteTempPage;
