import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginDriver = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("https://jsonserverrender.onrender.com/driver/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.dark("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.dark("Success");
              sessionStorage.setItem("username", resp.name);
              sessionStorage.setItem("park", resp.park);
              usenavigate("/driverdashboard");
            } else {
              toast.dark("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.dark("Login Failed due to :" + err.message);
        });
    }
  };

  // const ProceedLoginusingAPI = (e) => {
  //     e.preventDefault();
  //     if (validate()) {
  //         let inputobj={"username": username,
  //         "password": password};
  //         fetch("https://localhost:44308/User/Authenticate",{
  //             method:'POST',
  //             headers:{'content-type':'application/json'},
  //             body:JSON.stringify(inputobj)
  //         }).then((res) => {
  //             return res.json();
  //         }).then((resp) => {
  //             console.log(resp)
  //             if (Object.keys(resp).length === 0) {
  //                 toast.error('Login failed, invalid credentials');
  //             }else{
  //                  toast.success('Success');
  //                  sessionStorage.setItem('username',username);
  //                  sessionStorage.setItem('jwttoken',resp.jwtToken);
  //                usenavigate('/')
  //             }
  //         }).catch((err) => {
  //             toast.error('Login Failed due to :' + err.message);
  //         });
  //     }
  // }
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.dark("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.dark("Please Enter Password");
    }
    return result;
  };
  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6' style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className='container'>
          <div className='card'>
            <div className='card-header'>
              <h2>Driver Login</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>
                  Code Number <span className='errmsg'>*</span>
                </label>
                <input
                  placeholder='Enter Your Plate Number'
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className='form-control'
                ></input>
              </div>
              <div className='form-group'>
                <label>
                  Password <span className='errmsg'>*</span>
                </label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className='form-control'
                ></input>
              </div>
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>{" "}
              |
              <Link className='btn btn-success' to={"/registerdriver"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDriver;
