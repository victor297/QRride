import { Link } from "react-router-dom";
import React, { useState } from "react";
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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const AdminNavbar = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1);
  return (
    <>
      <Navbar className='navbar-top navbar-horizontal navbar-dark' expand='md'>
        <div className='px-4 container-fluid'>
          <NavbarBrand to='/' tag={Link}>
            {/* <img
              alt='...'
              src={require("../assets/img/brand/argon-react-white.png")}
            /> */}
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
                  <span className='nav-link-inner--text'>Dashboard</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link-icon' tag={Link} onClick={toggle}>
                  <i className='ni ni-circle-08' />
                  <span className='nav-link-inner--text'>Register</span>
                  <div>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Register Now</ModalHeader>
                      <ModalBody className='text-center'>
                        <Link
                          to={"/RegisterDriver"}
                          className='btn btn-success btn-lg'
                          onClick={toggle}
                        >
                          Register as a Driver
                        </Link>
                        <Link
                          to={"/register"}
                          className='btn btn-success btn-lg'
                        >
                          Register as a Student
                        </Link>
                      </ModalBody>
                      <ModalFooter>
                        <Button color='secondary' onClick={toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link-icon' tag={Link} onClick={toggle1}>
                  <i className='ni ni-key-25' />
                  <span className='nav-link-inner--text'>Login</span>
                  <div>
                    <Modal isOpen={modal1} toggle={toggle1}>
                      <ModalHeader toggle1={toggle1}>Login Now</ModalHeader>
                      <ModalBody className='text-center'>
                        <Link
                          to={"/LoginDriver"}
                          className='btn btn-success btn-lg'
                          onClick={toggle1}
                        >
                          Login as a Driver
                        </Link>
                        <Link to={"/login"} className='btn btn-success btn-lg'>
                          Login as a Student
                        </Link>
                      </ModalBody>
                      <ModalFooter>
                        <Button color='secondary' onClick={toggle1}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link-icon' to='/contact' tag={Link}>
                  <i className='ni ni-single-02' />
                  <span className='nav-link-inner--text'>Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </div>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
