import React from "react";
import AuthNavbar from "./components/AuthNavbar";

const Contact = () => {
  return (
    <div className='container text-center'>
      <AuthNavbar />
      <form action=''>
        <label htmlFor=''>Email:</label>
        <br />
        <input type='text' /> <br />
        <label htmlFor=''>Subject:</label>
        <br />
        <input type='text' />
        <br />
        <label htmlFor=''>Message:</label>
        <br />
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Contact;
