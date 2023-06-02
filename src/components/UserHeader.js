import Qrreader from "../Qrreader";
import { Fragment, useState } from "react";
import { PaystackButton } from "react-paystack";
import { Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  const publicKey = "pk_test_24f80340f75a34e90b00aa800e59608dfd6a0b06";
  const [amount, setamount] = useState("0");
  const [email, setEmail] = useState("");

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <>
      <div
        className='header pb-9 pt-5 pt-lg-3 d-flex align-items-center'
        style={{
          minHeight: "200px",
          backgroundColor: "black !important",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          paddingTop: "10 !important",
        }}
      >
        {/* Header container */}
        <Container className=' align-items-center' fluid>
          <Row>
            <Col lg='6' md='5' className='welcomuser'>
              <h1 className='display-2 text-green text-center'>WELCOME BACK</h1>
              <Fragment>
                <Qrreader />
              </Fragment>
            </Col>
            <Col lg='6' md='7' className='welcomuser'>
              <p className='text-green mt-0 mb-0'>
                Fund Account. You can see proceed to fund Account
              </p>

              <div className='item'>
                {/* <div className="item-details">
            <p>{amount}</p>
          </div> */}
              </div>
              <div className='checkout-form'>
                <form>
                  <label>amount</label> <br />
                  <input
                    type='text'
                    id='name'
                    onChange={(e) => setamount(e.target.value * 100)}
                  />{" "}
                  <br /> <br />
                  <label>Email</label> <br />
                  <input
                    type='text'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </form>{" "}
                <br />
                <PaystackButton {...componentProps} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
