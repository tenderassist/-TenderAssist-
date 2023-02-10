import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const ResetPage: NextPage = () => {
  async function resetTemps() {
    await pb.collection("temps").delete();
    document.getElementById("resetreturn").innerHTML = "Box data reset";
  }

  async function resetBoxes() {
    let confirm = window.confirm(" will be permanently deleted");
    if (confirm) {
    }
  }

  async function resetSpecials() {
    let confirm = window.confirm(" will be permanently deleted");
    if (confirm) {
    }
    await pb.collection("specials").delete();
    document.getElementById("resetreturn").innerHTML = "Special data reset";
  }

  async function resetOffices() {
    let confirm = window.confirm(" will be permanently deleted");
    if (confirm) {
    }
    await pb.collection("offices").delete();
    document.getElementById("resetreturn").innerHTML = "Ofice data reset";
  }

  return (
    <div>
      <h1>"TenderAssist"</h1>
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
              <a>Edit Offices</a>
            </li>
          </Link>

          <li>
            <a class="active">Reset</a>
          </li>

          <Link href={"login"}>
            <li>
              <a>Switch to User Mode</a>
            </li>
          </Link>
        </ul>
      </nav>

      <h2>Reset Information</h2>
      <p>Please click the button of the information you would like to reset</p>
      <p name="feedback" id="resetreturn"></p>

      <button id="btnResetTemps" onClick={resetTemps}>
        Reset Temps
      </button>
      <br />
      <br />

      <button id="btnResetBoxes" onClick={resetBoxes}>
        Reset Boxes
      </button>
      <br />
      <br />

      <button id="btnResetSpecials" onClick={resetSpecials}>
        Reset Specials
      </button>
      <br />
      <br />

      <button id="btnResetOffices" onClick={resetOffices}>
        Reset Offices
      </button>
    </div>
  );
};

export default ResetPage;
