import "./styles.css";
import { toast } from "react-toastify";
import { useState } from "react";
import QrReader from "react-qr-reader";

const Qrreader = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const price = data.slice(-3);
  const name = data.substring(0, data.indexOf(","));
  // const name = data.split(' ')[0]

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  //adding to database balance
  const [mainbalance, setmainbalance] = useState("");
  const [userbalance, setuserbalance] = useState("");
  let resp = sessionStorage.getItem("resp");
  let useramt = sessionStorage.getItem("useramt");
  let mainamt = sessionStorage.getItem("mainamt");
  // const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    if (+price > +useramt) {
      isproceed = false;
    }

    if (!isproceed) {
      toast.dark("Enter amount below available balance");
    }
    return isproceed;
  };

  const handlesubmit = () => {
    // e.preventDefault();
    let balanceobj = {
      ...resp,
      mainbalance: mainbalance,
      userbalance: userbalance,
    };
    if (IsValidate()) {
      console.log(balanceobj);
      fetch("https://jsonserverrender.onrender.com/balance/81", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(balanceobj),
      })
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          else {
            toast.dark("paid successfully");
          }
          return res;
        })
        .then((res) => res.json())
        .catch((error) => toast.dark("server error"));
    }
  };
  fetch("https://jsonserverrender.onrender.com/balance/81")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      sessionStorage.setItem("resp", resp);
      sessionStorage.setItem("mainamt", resp.mainbalance);
      sessionStorage.setItem("useramt", resp.userbalance);
      setuserbalance(+useramt - +price);
      setmainbalance(+price + +mainamt);
      console.log(mainbalance);
      console.log(userbalance);
    });

  return (
    <div className='Qrreader'>
      {/* <h1 className="scanner-text">Hello QRrider</h1> */}
      <p>Please scan your QRcode below</p>
      {/* <h2>
        Last Scan:
        {selected}
      </h2> */}

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <div className='QRstyle'>
            <QrReader
              facingMode={selected}
              delay={1000}
              onError={handleError}
              onScan={handleScan}
              // chooseDeviceId={()=>selected}
              style={{ width: "300px", boxshadow: "5px 10px #888888" }}
            />
          </div>
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && (
        <button
          onClick={() => {
            handlesubmit();
          }}
        >
          pay N{price} to {name}
        </button>
      )}
    </div>
  );
};

export default Qrreader;
