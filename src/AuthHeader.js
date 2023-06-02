import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const path = window.location.href.toLowerCase();
  // const location = useLocation();
  useEffect(() => {
    if (
      path === "https://qrride.netlify.app/login" ||
      path === "https://qrride.netlify.app/logindriver" ||
      path === "https://qrride.netlify.app/registerdriver" ||
      path === "https://qrride.netlify.app/register"
    ) {
      showmenuupdateupdate(true);
    } else {
      // showmenuupdateupdate(false);
      // let username = sessionStorage.getItem('username');
      // if (username === '' || username === null) {
      //     usenavigate('/');
      //     console.log('hi')
      // } else {
      //     displayusernameupdate(username);
      showmenuupdateupdate(false);
      console.log(path, displayusername);
      // }
    }
    if (
      path === "https://qrride.netlify.app/logout" ||
      path === "https://qrride.netlify.app/driverdashboard" ||
      path === "https://qrride.netlify.app/profile"
    ) {
      showmenuupdateupdate(false);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [showmenuupdateupdate, path, usenavigate, displayusername]);
  return (
    <div>
      {showmenu && (
        <div className='header'>
          <h1 className='text-center'>
            {" "}
            <Link style={{ color: "#3fba96" }} to={"/"}>
              Home
            </Link>{" "}
          </h1>
          {/* <Link to={'/customer'}>Customer</Link> */}
          {/* <span style={{ marginLeft: '70%' }}>Welcome <b>{displayusername}</b></span> */}
          {/* <Link style={{ float: 'right' }} to={'/login'}>Logout</Link> */}
        </div>
      )}
    </div>
  );
};

export default AuthHeader;
