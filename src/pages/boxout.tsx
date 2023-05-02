import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { ListResult } from "pocketbase";
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("https://tenderassist.pockethost.io");
pb.autoCancellation(false);

const BoxOutPage: NextPage = () => {
  //Enter Button
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      // Call your function here
      BoxCheckOut();
    }
  };
  //---------------------------------------------------

  async function BoxCheckOut() {
    const tempIDData = tempnameout.value;
    const boxoutoffidval = boxoutoffid.value;
    const boxout1val = boxout1.value;
    const boxout2val = boxout2.value;
    const boxout3val = boxout3.value;
    const specialout1val = specialout1.value;
    const specialout2val = specialout1.value;
    //----------------------------------------------------------
    document.getElementById("boxoutreturn").innerHTML =
      "Office: " +
      boxoutoffidval +
      "; Checked out Boxes: (" +
      boxout1val +
      ") (" +
      boxout2val +
      ") (" +
      boxout3val +
      "); " +
      "Specials: (" +
      specialout1val +
      ") (" +
      specialout2val +
      ")";

    document.getElementById("boxoutoffid").value = "";
    document.getElementById("boxout1").value = "";
    document.getElementById("boxout2").value = "";
    document.getElementById("boxout3").value = "";
    document.getElementById("specialout1").value = "";
    document.getElementById("specialout2").value = "";

    //----------------------------------------------------------

    const nodate = new Date();
    const dateout = nodate.getTime();
    const outdisplay =
      nodate.getHours() + ":" + nodate.getMinutes() + ":" + nodate.getSeconds();
    const offout = "officenum= " + boxoutoffidval;

    var offrecord = await pb.collection("offices").getFirstListItem(offout);
    const officerecordid = offrecord.id;
    const officeIDData = boxoutoffidval;
    const offboxspecdata = offrecord.offboxspecchecked;
    var offb1 = offrecord.offbox1;
    var offb2 = offrecord.offbox2;
    var offb3 = offrecord.offbox3;
    var offb4 = offrecord.offbox4;
    var offb5 = offrecord.offbox5;
    var offs1 = offrecord.offspec1;
    var offs2 = offrecord.offspec2;
    var offs3 = offrecord.offspec3;

    // BOXES ----------------------------------------------------------
    if (boxout1val != "") {
      const box1 = "boxnum= " + boxout1val;
      const box1record = await pb.collection("boxes").getFirstListItem(box1);
      const boxID1Data = box1record.id;

      pb.collection("boxes").update(boxID1Data, {
        boxlastcheckout: dateout,
        boxlastoutdisplay: outdisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckout: tempIDData,
      });
    }
    //----------------------------------------------------------
    if (boxout2val != "") {
      const box2 = "boxnum= " + boxout2val;
      const box2record = await pb.collection("boxes").getFirstListItem(box2);
      const boxID2Data = box2record.id;

      pb.collection("boxes").update(boxID2Data, {
        boxlastcheckout: dateout,
        boxlastoutdisplay: outdisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckout: tempIDData,
      });
    }
    //----------------------------------------------------------
    if (boxout3val != "") {
      const box3 = "boxnum= " + boxout3val;
      const box3record = await pb.collection("boxes").getFirstListItem(box3);
      const boxID3Data = box3record.id;

      pb.collection("boxes").update(boxID3Data, {
        boxlastcheckout: dateout,
        boxlastoutdisplay: outdisplay,
        boxlastoffice: officeIDData,
        boxtemplastcheckout: tempIDData,
      });
    }

    // SPECIALS ----------------------------------------------------------
    if (specialout1val != "") {
      const spec1 = "specialnum= " + specialout1val;
      const spec1record = await pb
        .collection("specials")
        .getFirstListItem(spec1);
      const specID1Data = spec1record.id;

      pb.collection("specials").update(specID1Data, {
        speciallastcheckout: dateout,
        speciallastoutdisplay: outdisplay,
        speciallastoffice: officeIDData,
        specialtemplastcheckout: tempIDData,
      });
    }
    //----------------------------------------------------------
    if (specialout2val != "") {
      const spec2 = "specialnum= " + specialout2val;
      const spec2record = await pb
        .collection("specials")
        .getFirstListItem(spec2);
      const specID2Data = spec2record.id;

      pb.collection("specials").update(specID2Data, {
        speciallastcheckout: dateout,
        speciallastoutdisplay: outdisplay,
        speciallastoffice: officeIDData,
        specialtemplastcheckout: tempIDData,
      });
    }
    //----------------------------------------------------------

    const offboxes =
      offboxspecdata +
      "[(" +
      boxout1val +
      ") (" +
      boxout2val +
      ") (" +
      boxout3val +
      ") (" +
      specialout1val +
      ") (" +
      specialout2val +
      ") Time: " +
      outdisplay +
      " ]; ";

    const updateOffOUT = await pb.collection("offices").update(officerecordid, {
      offboxspecchecked: offboxes,
    });
    //Office boxes------------------------------------------
    if (offb1 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox1: boxout1val,
      });
    } else if (offb2 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox2: boxout1val,
      });
    } else if (offb3 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox3: boxout1val,
      });
    } else if (offb4 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox4: boxout1val,
      });
    } else if (offb5 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox5: boxout1val,
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offout);
    offb1 = offrecord.offbox1;
    offb2 = offrecord.offbox2;
    offb3 = offrecord.offbox3;
    offb4 = offrecord.offbox4;
    offb5 = offrecord.offbox5;

    if (offb1 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox1: boxout2val,
      });
    } else if (offb2 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox2: boxout2val,
      });
    } else if (offb3 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox3: boxout2val,
      });
    } else if (offb4 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox4: boxout2val,
      });
    } else if (offb5 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox5: boxout2val,
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offout);
    offb1 = offrecord.offbox1;
    offb2 = offrecord.offbox2;
    offb3 = offrecord.offbox3;
    offb4 = offrecord.offbox4;
    offb5 = offrecord.offbox5;

    if (offb1 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox1: boxout3val,
      });
    } else if (offb2 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox2: boxout3val,
      });
    } else if (offb3 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox3: boxout3val,
      });
    } else if (offb4 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox4: boxout3val,
      });
    } else if (offb5 == "") {
      pb.collection("offices").update(officerecordid, {
        offbox5: boxout3val,
      });
    }

    //Office specials------------------------------------------
    if (offs1 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec1: specialout1val,
      });
    } else if (offs2 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec2: specialout1val,
      });
    } else if (offs3 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec3: specialout1val,
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offout);
    offs1 = offrecord.offspec1;
    offs2 = offrecord.offspec2;
    offs3 = offrecord.offspec3;

    if (offs1 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec1: specialout2val,
      });
    } else if (offs2 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec2: specialout2val,
      });
    } else if (offs3 == "") {
      pb.collection("offices").update(officerecordid, {
        offspec3: specialout2val,
      });
    }
    offrecord = await pb.collection("offices").getFirstListItem(offout);
    offs1 = offrecord.offspec1;
    offs2 = offrecord.offspec2;
    offs3 = offrecord.offspec3;

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

          <li>
            <a class="active">Boxes Out</a>
          </li>

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
        </ul>
      </nav>

      <div name="middle">
        <h2>Boxes/Specials Going Out</h2>
        <p>Please fill in the information below</p>
        <br />
        <label>Temp Booking Out: </label>
        <input
          type="text"
          id="tempnameout"
          name="tempnameout"
          placeholder="E.g. Mathew"
        />
        <br />
        <label>Office Number: </label>
        <input
          id="boxoutoffid"
          name="boxoutoffid"
          placeholder="E.g. '1'"
          required
        />
        <br />

        <p>BOXES: </p>
        <label>Box 1: </label>
        <input
          id="boxout1"
          name="boxout1"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Box 2: </label>
        <input
          id="boxout2"
          name="boxout2"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Box 3: </label>
        <input
          id="boxout3"
          name="boxout3"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />
        <br />

        <p>SPECIALS:</p>
        <label>Special 1: </label>
        <input
          id="specialout1"
          name="specialout1"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <label>Special 2: </label>
        <input
          id="specialout2"
          name="specialout2"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <br />

        <p name="feedback" id="boxoutreturn"></p>

        <button id="btnBoxOut" onClick={BoxCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default BoxOutPage;
