import { Link } from "react-router-dom";
import React from "react";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Media,
} from "reactstrap";

const UserNavbar = () => {
  fetch("https://jsonserverrender.onrender.com/balance/81")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      sessionStorage.setItem("useramt", resp.userbalance);
    });
  let username = sessionStorage.getItem("username");
  let balance = sessionStorage.getItem("useramt");

  return (
    <>
      <Navbar className='navbar-top navbar-horizontal navbar-dark' expand='md'>
        <div className='px-0 mr-0 ml-0 container-fluid'>
          <NavbarBrand to='/' tag={Link}>
            <h1>
              <strong> QRRIDE</strong>
            </h1>
          </NavbarBrand>
          <button className='navbar-toggler' id='navbar-collapse-main'>
            <span className='navbar-toggler-icon' />
          </button>
          <UncontrolledCollapse navbar toggler='#navbar-collapse-main'>
            <div className='navbar-collapse-header d-md-none'>
              <Row>
                <Col className='collapse-brand' xs='6'>
                  <Link to='/'>
                    <h2>QRride</h2>
                  </Link>
                </Col>
                <Col className='collapse-close' xs='6'>
                  <button className='navbar-toggler' id='navbar-collapse-main'>
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='nav-link-icon' to='/' tag={Link}>
                  <i className='ni ni-planet' />
                  <span className='nav-link-inner--text'>Dashboard</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link-icon' to='/' tag={Link}>
                  <i className='ni ni-planet' />
                  <span className='nav-link-inner--text'>Dashboard</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link-icon' to='/contact' tag={Link}>
                  <i className='ni ni-single-02' />
                  <span className='nav-link-inner--text'>Contact Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link-icon'>
                  <i className='ni ni-single-02' />
                  <span className='nav-link-inner--text'>
                    Balance:N{balance}
                  </span>
                </NavLink>
              </NavItem>

              <Media className='align-items-center'>
                <span className='avatar avatar-sm rounded-circle'>
                  <img
                    alt='...'
                    src={require("./assets/img/theme/team-4-800x800.jpg")}
                  />
                </span>
                <Media className='ml-2 d-none d-lg-block'>
                  <span className='mb-0 text-sm font-weight-bold'>
                    {username}
                  </span>
                </Media>
              </Media>
              <NavItem>
                <NavLink
                  className='nav-link-icon'
                  to='/logout'
                  tag={Link}
                  onClick={() => sessionStorage.clear()}
                >
                  <span className='nav-link-inner--text'>LogOut</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </div>
      </Navbar>
    </>
  );
};

export default UserNavbar;
