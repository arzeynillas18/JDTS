
import React, { useState } from "react";
import ContactModal from "../Modal/ContactModal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming Truck rental venture
              </h1>
              <p className="text-gray-400">
              "In every venture, we guarantee to deliver excellence and exceed your expectations.",{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={() => {
                  openModal();
                  console.log("Button clicked");
                }}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Contact;
