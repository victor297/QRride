import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import RegisterDriver from "./RegisterDriver";
import "bootstrap/dist/css/bootstrap.min.css";
import Landpage from "./Landpage";
import Profile from "./Profile";
import LoginDriver from "./LoginDriver";
import AuthHeader from "./AuthHeader";
import DriverDashboard from "./DriverDashboard";
import Contact from "./Contact";
//latest added

function App() {
  return (
    <div className='App'>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <AuthHeader />
      <Routes>
        <Route path='/' element={<Landpage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/logindriver' element={<LoginDriver />}></Route>
        <Route path='/logout' element={<Landpage />}></Route>
        <Route path='/driverdashboard' element={<DriverDashboard />}></Route>
        <Route path='/registerdriver' element={<RegisterDriver />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
