import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const AddBoxesPage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      AddBoxesnSpec();
    }
  };
  //---------------------------------------------------

  async function AddBoxesnSpec() {
    const boxorspec = addboxspecial.value;
    const bnsnum = addboxspecnum.value;

    if (boxorspec == "addbox") {
      const data = {
        boxnum: bnsnum,
      };

      const record = await pb.collection("boxes").create(data);

      document.getElementById("addboxreturn").innerHTML =
        "Successfuly added Box " + bnsnum;
    }

    if (boxorspec == "addspecial") {
      const data = {
        specialnum: bnsnum,
      };

      const record = await pb.collection("specials").create(data);

      document.getElementById("addboxreturn").innerHTML =
        "Successfuly added Special " + bnsnum;
    }

    document.getElementById("addboxspecnum").value = "";
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

          <li>
            <a class="active">Add Boxes/Specials</a>
          </li>

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

      <div name="middle">
        <h2>Add Box/Special</h2>
        <p>
          Please enter the details of the box/special you would like to add
          below
        </p>
        <br />
        <label>Type: </label>
        <select name="addboxspecial" id="addboxspecial">
          <option value="addbox">Box</option>
          <option value="addspecial">Special</option>
        </select>
        <br />

        <label>Box/Special Number: </label>
        <input
          id="addboxspecnum"
          name="addboxspecnum"
          placeholder="E.g. '21'"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="addboxreturn"></p>

        <button id="btnAddBox" onClick={AddBoxesnSpec}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBoxesPage;
