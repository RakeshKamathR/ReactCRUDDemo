import React from "react";

const Contact = () => {
  //disable right click inside a particular component
  // const handleContextMenu = (event) => {
  //   event.preventDefault();
  // };
  return (
    // <div onContextMenu={handleContextMenu}>
    //   <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
    //   <p className="text-lg text-center">Get in touch with us.</p>
    // </div>
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center">Get in touch with us.</p>
    </div>
  );
};

export default Contact;
