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
  Container,
  Row,
  Col,
  Media,
} from "reactstrap";

const DriverNavbar = ({ balance }) => {
  let username = sessionStorage.getItem("username");

  return (
    <>
      <Navbar className='navbar-top navbar-horizontal navbar-dark' expand='md'>
        <Container className='px-4'>
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
                  <h1>
              <strong> QRRIDE</strong>
            </h1>
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
                  <span className='nav-link-inner--text'>Home</span>
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
                    // src={require("../../assets/img/theme/team-4-800x800.jpg")}
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
        </Container>
      </Navbar>
    </>
  );
};

export default DriverNavbar;
