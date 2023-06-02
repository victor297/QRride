import React from "react";

function OneComponent(props) {
  return (
    <div>
      <section className='md-text-justify'>
        <div className='textContainer'>
          <h1 className='mb-4'>
            <strong>Drive to get paid</strong>
          </h1>
          <h2>
            Drive on the platform with the largest network of active riders.
          </h2>
          <h2>Focused on safety, wherever you go</h2>
          <p>
            The app is available in thousands of cities worldwide, so you can
            request a ride even when you’re far from home. With every safety
            feature and every standard in our Community Guidelines, we're
            committed to helping to create a safe environment for our users.
          </p>

          <button className='btn btn-dark btn-sm pt-2 pb-1 pl-3 pr-3 mb-4'>
            <a href='/registerdriver'>
              <h3 className='text-white'>Sign Up to Drive</h3>
            </a>
          </button>
          <button className='btn btn-dark btn-sm pt-2 pb-1 pl-3 pr-3  mb-4'>
            <a href='/logindriver'>
              <h3 className='text-white'>Login as a Driver</h3>
            </a>
          </button>
        </div>
        <div className='imgContainersam mainImg'>
          <img src={require("./assets/img/brand/bus.png")} alt='bus' />
        </div>
      </section>
      <section>
        <div className='imgContainersam'>
          <img src={require("./assets/img/brand/qrcode.png")} alt='qrcode' />
        </div>
        <div className='textContainer aboutText'>
          <h1>Scan on the go to pay</h1>
          <p>
            Follow the law We’re committed to following the law. We expect
            everyone who uses our apps to do their part and adhere to applicable
            laws.
          </p>

          <button className='btn btn-dark btn-sm pt-2 pb-1 pl-3 pr-3 mb-4'>
            <a href='/register'>
              <h3 className='text-white'>Student's SignUp</h3>
            </a>
          </button>
          <button className='btn btn-dark btn-sm pt-2 pb-1 pl-3 pr-3  mb-4'>
            <a href='/login'>
              <h3 className='text-white'>book a ride</h3>
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default OneComponent;

// import React from "react";

// function MainPage() {
//   return (
//     <section>
//       <div className="textContainer">
//         <h2>Grow yourself with us</h2>
//         <h1>Grow your skill & <br/> get world class <br/> job’s</h1>
//         <p>
//           Non-disclosure agreement seed round seed money accelerator influencer.
//           Growth hacking return nondis sure agreement seed round seed .
//         </p>
//         <input type="text" placeholder= "Search course title"/>
//         <button className="btn">Search</button>
//       </div>
//       <div className="imgContainersam mainImg">
//         <img
//           src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877cc47182737223f8cab6_Student%2001-p-800.png"
//           alt="Image"
//         />
//       </div>
//     </section>
//   );
// }

// export default MainPage;
