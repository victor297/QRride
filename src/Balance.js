import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Balance = () => {

    const [mainbalance, setmainbalance] = useState('');
    const [userbalance, setuserbalance] = useState('');
     const [accmainbalance, setaccmainbalance] = useState('');
    let resp = sessionStorage.getItem('resp');
    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        return isproceed;
    }

    
    const handlesubmit = (e) => {
        e.preventDefault();
        let balanceobj = { ...resp , userbalance:userbalance };
        if (IsValidate()) {
            console.log(balanceobj);
            fetch("https://jsonserverrender.onrender.com/balance/81", {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(balanceobj)
            }).then(res => {
                if (!res.ok) throw new Error(res.statusText);
                else {
                    toast.dark('Driver Registered successfully.')
                    navigate('/dashboard');
                }
                return res;
            }).then(res => res.json())
                .catch(error => toast.dark('server error'));
    
        }
    }   
    
    
        
            fetch("https://jsonserverrender.onrender.com/balance/81").then((res) => {
        return res.json();
            }).then((resp) => {
                sessionStorage.setItem('resp',resp);
            //   setaccmainbalance(+mainbalance  + +balance)
            })
        
    return (
    <div className="card">
        <form onSubmit={handlesubmit}>
        <input type="number" value={mainbalance} onChange={e => setmainbalance(e.target.value)} ></input>
        <input type="number" value={userbalance} onChange={e => setuserbalance(e.target.value)} ></input>
        <button type="submit" className="btn btn-primary">balance</button>
        {/* <h3> {balance}</h3> */}
        </form>


    </div>);
}

export default Balance;