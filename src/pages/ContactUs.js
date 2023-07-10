import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ChatBotComponent from "../components/ChatBotComponent";
import "./ContactUs.css";

const ContactUs = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      onWheel={(event) => {
        if (event.nativeEvent.wheelDelta > 0) {
          console.log("scroll up");
          setOpen(true);
        } else {
          console.log("scroll down");
          setOpen(false);
        }
      }}
    >
      <div>
        <Navbar />
      </div>
      <div>
        {open ? (
          <div id="bot">
            {" "}
            <ChatBotComponent />{" "}
          </div>
        ) : null}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
