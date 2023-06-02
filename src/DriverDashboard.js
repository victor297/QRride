import { useRef, useState } from "react";
import { toast } from "react-toastify";
import QrCard from "./components/QrCard";
import DriverNavbar from "./DriverNavbar";

function DriverDashboard() {
  const qrRef = useRef();

  const [url, setUrl] = useState(""),
    [qrColor, setQrColor] = useState("#ffffff"),
    [qrBgColor, setQrBgColor] = useState("#2a363b"),
    [noImg, setNoImg] = useState(false);

  const handleQrReset = () => {
    setUrl("");
    setQrColor("#ffffff");
    setQrBgColor("#2a363b");
    setNoImg(false);
  };

  const [mainbalance, setmainbalance] = useState("");
  const [accmainbalance, setaccmainbalance] = useState("");
  let balance = sessionStorage.getItem("balance");
  let userbalance = sessionStorage.getItem("userbalance");

  fetch("https://jsonserverrender.onrender.com/balance/81")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      sessionStorage.setItem("balance", resp.mainbalance);
      sessionStorage.setItem("userbalance", resp.userbalance);

      console.log(balance);
      console.log(mainbalance);
      console.log(resp.userbalance);

      // }else{
      setaccmainbalance(-mainbalance - -balance);
    });

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter a valid number";
    if (isNaN(mainbalance) || mainbalance == "" || mainbalance == 0) {
      isproceed = false;
    }
    if (+mainbalance > balance) {
      isproceed = false;
      errormessage = "Enter amount below available balance";
    }

    if (!isproceed) {
      toast.dark(errormessage);
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let balanceobj = { userbalance: userbalance, mainbalance: accmainbalance };
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
            toast.dark(mainbalance + " naira withdrawn successfully.");
            // navigate('/dashboard');
          }
          return res;
        })
        .then((res) => res.json())
        .catch((error) => toast.dark("server error"));
    }
  };

  return (
    <>
      <DriverNavbar balance={balance} />

      <main className='main'>
        <form className='text-center' onSubmit={handlesubmit}>
          <h1>Welcome</h1>
          <input
            className='col-12 col-md-8 col-lg-7'
            placeholder='Input amount to withdraw'
            type='number'
            value={mainbalance}
            onChange={(e) => setmainbalance(e.target.value)}
          ></input>{" "}
          <br /> <br />
          <button type='submit' className='btn btn-primary'>
            withdraw
          </button>
        </form>

        <QrCard
          qrRef={qrRef}
          url={url}
          qrColor={qrColor}
          bgColor={qrBgColor}
          noImg={noImg}
          //new one
          setUrl={setUrl}
          setQrColor={setQrColor}
          setQrBgColor={setQrBgColor}
          setNoImg={setNoImg}
          handleQrReset={handleQrReset}
        />
      </main>
    </>
  );
}

export default DriverDashboard;
