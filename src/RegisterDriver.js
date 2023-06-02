import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterDriver = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [park, parkchange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (park === null || park === "") {
      isproceed = false;
      errormessage += " Park unit";
    }

    if (!isproceed) {
      toast.dark(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.dark("Please enter the valid email");
      }
    }
    return isproceed;
  };
  console.log(park);

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, park, address, gender };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("https://jsonserverrender.onrender.com/driver", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          else {
            toast.dark("Driver Registered successfully.");
            navigate("/logindriver");
          }
          return res;
        })
        .then((res) => res.json())
        .catch((error) => toast.dark("please provide your real code number"));

      // .then((res) => {
      //     toast.success('Driver Registered successfully.')
      //     navigate('/login');
      // }).catch((err) => {
      //     toast.error('Failed :' + err.message);
      // });

      // keep
      // .then( res => {
      //     if (!res.ok) throw new Error(res.statusText);
      //     return res;
      // }).then(res => res.json())
      // .then(data => console.log(data))
      // .catch(error => console.log(error));
    }
  };
  return (
    <div>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={handlesubmit}>
          <div className='card'>
            <div className='card-header'>
              <h1>Driver Registeration</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Code Number</label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className='form-control'
                    ></input>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type='password'
                      className='form-control'
                    ></input>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className='form-control'
                    ></input>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className='form-control'
                    ></input>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className='form-control'
                    ></input>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Unit</label>
                    <select
                      onChange={(e) => parkchange(e.target.value)}
                      className='form-control'
                    >
                      <option value=''>--Please choose park name--</option>
                      <option value='150'>park-terminus</option>
                      <option value='250'>park-post/challange</option>
                      <option value='100'>Within-school</option>
                    </select>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className='form-control'
                    ></textarea>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>Gender</label>
                    <br></br>
                    <input
                      type='radio'
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name='gender'
                      value='male'
                      className='app-check'
                    ></input>
                    <label>Male</label>
                    <input
                      type='radio'
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name='gender'
                      value='female'
                      className='app-check'
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>{" "}
              |
              <Link to={"/logindriver"} className='btn btn-danger'>
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterDriver;
