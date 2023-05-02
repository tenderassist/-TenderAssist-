import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const BoxInPage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      BoxCheckIn();
    }
  };
  //---------------------------------------------------

  async function BoxCheckIn() {
    const tempIDData = tempnamein.value;
    const boxinoffidval = boxinoffid.value;
    const boxin1val = boxin1.value;
    const boxin2val = boxin2.value;
    const boxin3val = boxin3.value;
    const specialin1val = specialin1.value;
    const specialin2val = specialin2.value;

    //-----------------------------------------------------------------------
    document.getElementById("boxinreturn").innerHTML =
      "Office: " +
      boxinoffidval +
      "; Checked in Boxes: (" +
      boxin1val +
      ") (" +
      boxin2val +
      ") (" +
      boxin3val +
      "); " +
      "Specials: (" +
      specialin1val +
      ") (" +
      specialin2val +
      ")";

    document.getElementById("boxinoffid").value = "";
    document.getElementById("boxin1").value = "";
    document.getElementById("boxin2").value = "";
    document.getElementById("boxin3").value = "";
    document.getElementById("specialin1").value = "";
    document.getElementById("specialin2").value = "";

    //------------------------------------------------------------

    const nidate = new Date();
    const datein = nidate.getTime();
    const indisplay =
      nidate.getHours() + ":" + nidate.getMinutes() + ":" + nidate.getSeconds();
    const offin = "officenum= " + boxinoffidval;

    var offrecord = await pb.collection("offices").getFirstListItem(offin);
    const offrecordid = offrecord.id;
    const officeIDData = boxinoffidval;
    var offb1in = offrecord.offbox1;
    var offb2in = offrecord.offbox2;
    var offb3in = offrecord.offbox3;
    var offb4in = offrecord.offbox4;
    var offb5in = offrecord.offbox5;
    var offs1in = offrecord.offspec1;
    var offs2in = offrecord.offspec2;
    var offs3in = offrecord.offspec3;

    // BOXES ----------------------------------------------------------------
    if (boxin1val != "") {
      const box1 = "boxnum= " + boxin1val;
      const box1record = await pb.collection("boxes").getFirstListItem(box1);
      const boxID1Data = box1record.id;

      pb.collection("boxes").update(boxID1Data, {
        boxlastcheckin: datein,
        boxlastindisplay: indisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckin: tempIDData,
      });
    }

    //-----------------------------------------------------------------------
    if (boxin2val != "") {
      const box2 = "boxnum= " + boxin2val;
      const box2record = await pb.collection("boxes").getFirstListItem(box2);
      const boxID2Data = box2record.id;

      pb.collection("boxes").update(boxID2Data, {
        boxlastcheckin: datein,
        boxlastindisplay: indisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckin: tempIDData,
      });
    }

    //-----------------------------------------------------------------------
    if (boxin3val != "") {
      const box3 = "boxnum= " + boxin3val;
      const box3record = await pb.collection("boxes").getFirstListItem(box3);
      const boxID3Data = box3record.id;

      pb.collection("boxes").update(boxID3Data, {
        boxlastcheckin: datein,
        boxlastindisplay: indisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckin: tempIDData,
      });
    }

    // SPECIALS -----------------------------------------------------------------------
    if (specialin1val != "") {
      const spec1 = "specialnum= " + specialin1val;
      const spec1record = await pb
        .collection("specials")
        .getFirstListItem(spec1);
      const specID1Data = spec1record.id;

      pb.collection("specials").update(specID1Data, {
        speciallastcheckin: datein,
        speciallastindisplay: indisplay,
        speciallastoffice: officeIDData,
        specialtemplastcheckin: tempIDData,
      });
    }

    //-----------------------------------------------------------------------
    if (specialin2val != "") {
      const spec2 = "specialnum= " + specialin2val;
      const spec2record = await pb
        .collection("specials")
        .getFirstListItem(spec2);
      const specID2Data = spec2record.id;

      pb.collection("specials").update(specID2Data, {
        speciallastcheckin: datein,
        speciallastindisplay: indisplay,
        speciallastoffice: officeIDData,
        specialtemplastcheckin: tempIDData,
      });
    }

    //Office Boxes-----------------------------------------------------------------------
    if (boxin1val == offb1in) {
      pb.collection("offices").update(offrecordid, {
        offbox1: "",
      });
    } else if (boxin1val == offb2in) {
      pb.collection("offices").update(offrecordid, {
        offbox2: "",
      });
    } else if (boxin1val == offb3in) {
      pb.collection("offices").update(offrecordid, {
        offbox3: "",
      });
    } else if (boxin1val == offb4in) {
      pb.collection("offices").update(offrecordid, {
        offbox4: "",
      });
    } else if (boxin1val == offb5in) {
      pb.collection("offices").update(offrecordid, {
        offbox5: "",
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offin);
    offb1in = offrecord.offbox1;
    offb2in = offrecord.offbox2;
    offb3in = offrecord.offbox3;
    offb4in = offrecord.offbox4;
    offb5in = offrecord.offbox5;

    if (boxin2val == offb1in) {
      pb.collection("offices").update(offrecordid, {
        offbox1: "",
      });
    } else if (boxin2val == offb2in) {
      pb.collection("offices").update(offrecordid, {
        offbox2: "",
      });
    } else if (boxin2val == offb3in) {
      pb.collection("offices").update(offrecordid, {
        offbox3: "",
      });
    } else if (boxin2val == offb4in) {
      pb.collection("offices").update(offrecordid, {
        offbox4: "",
      });
    } else if (boxin2val == offb5in) {
      pb.collection("offices").update(offrecordid, {
        offbox5: "",
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offin);
    offb1in = offrecord.offbox1;
    offb2in = offrecord.offbox2;
    offb3in = offrecord.offbox3;
    offb4in = offrecord.offbox4;
    offb5in = offrecord.offbox5;

    if (boxin3val == offb1in) {
      pb.collection("offices").update(offrecordid, {
        offbox1: "",
      });
    } else if (boxin3val == offb2in) {
      pb.collection("offices").update(offrecordid, {
        offbox2: "",
      });
    } else if (boxin3val == offb3in) {
      pb.collection("offices").update(offrecordid, {
        offbox3: "",
      });
    } else if (boxin3val == offb4in) {
      pb.collection("offices").update(offrecordid, {
        offbox4: "",
      });
    } else if (boxin3val == offb5in) {
      pb.collection("offices").update(offrecordid, {
        offbox5: "",
      });
    }
    //Office Specials-----------------------------------------------------------------------
    if (specialin1val == offs1in) {
      pb.collection("offices").update(offrecordid, {
        offspec1: "",
      });
    } else if (specialin1val == offs2in) {
      pb.collection("offices").update(offrecordid, {
        offspec2: "",
      });
    } else if (specialin1val == offs3in) {
      pb.collection("offices").update(offrecordid, {
        offspec3: "",
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offin);
    var offs1in = offrecord.offspec1;
    var offs2in = offrecord.offspec2;
    var offs3in = offrecord.offspec3;

    if (specialin2val == offs1in) {
      pb.collection("offices").update(offrecordid, {
        offspec1: "",
      });
    } else if (specialin2val == offs2in) {
      pb.collection("offices").update(offrecordid, {
        offspec2: "",
      });
    } else if (specialin2val == offs3in) {
      pb.collection("offices").update(offrecordid, {
        offspec3: "",
      });
    }

    //----------------------------------------------------------
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

          <li>
            <a class="active">Boxes In</a>
          </li>

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
        </ul>
      </nav>

      <div name="middle">
        <h2>Boxes/Specials Coming In</h2>
        <p>Please fill in the information below</p>
        <br />
        <label>Temp Booking In: </label>
        <input type="text" id="tempnamein" placeholder="E.g. Mathew" />
        <br />
        <label>Office Number: </label>
        <input
          id="boxinoffid"
          name="boxinoffid"
          placeholder="E.g. '2'"
          required
        />
        <br />

        <p>BOXES:</p>
        <label>Box 1: </label>
        <input
          id="boxin1"
          name="boxin1"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Box 2: </label>
        <input
          id="boxin2"
          name="boxin2"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Box 3: </label>
        <input
          id="boxin3"
          name="boxin3"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />
        <br />

        <p>SPECIALS:</p>
        <label>Special 1: </label>
        <input
          id="specialin1"
          name="specialin1"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Special 2: </label>
        <input
          id="specialin2"
          name="specialin2"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="boxinreturn"></p>

        <button id="btnBoxIn" onClick={BoxCheckIn}>
          Check In
        </button>
      </div>
    </div>
  );
};

export default BoxInPage;
