import logo from "../images/logo1.jpg";
import flag from "../images/download.jpeg";
import { GrLocation } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { RiMailSendLine } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{ display: "grid", justifySelf: "center" }}>
        <div className="footer-container__info">
          <img src={logo} alt="logo" className="footer-logo" />
          <div className="footer-text-container">
            <p className="footer-title">7Rogyam Healthcare (P) Ltd</p>
            <p className="footer-text">
              <span>CIN:</span> U85320MP2023PTC064383
            </p>
            <p className="footer-text">
              <span>GST:</span> 23AACCZ1326M1ZB
            </p>
            <p>
              <GrLocation className="footer-icon" />
              Gx 14, Varun Nagar, Kolar Road, Bhopal, Madhya Pradesh 462042
            </p>
          </div>
        </div>
        <p className="footer-reserved">
          All Rights Reserved. With Love by 7R{" "}
          <img src={flag} alt="indian flag" style={{ width: "25px" }} />.
        </p>
      </div>
      <div id="contact" className="footer-contact">
        <p className="footer-title2">Contact Us</p>
        <p>
          Have questions or need assistance? <br />
          Our customer support team is available to assist you with any queries
          you may have. You can reach us by phone, email or chat. We look
          forward to hearing from you!
        </p>
        <a
          href={`tel:9201989710`}
          className="footer-contact-details"
          style={{
            marginBottom: "0px",
            textDecoration: "none",
            color: "blue",
          }}
        >
          <ImPhone className="footer-icon" />
          <span style={{ fontSize: "20px" }}>9201989710</span>
        </a>
        <a
          href="mailto:Contact@7Rogyam.com"
          className="footer-contact-details"
          style={{ textDecoration: "none", color: "blue" }}
        >
          <RiMailSendLine className="footer-icon" />
          Contact@7Rogyam.com
        </a>
        <div className="social-container">
          <p className="social-title">Follow Us </p>
          <div className="social-icons">
            <BsFacebook size="20" />
            <BsInstagram size="20" />
            <BsTwitter size="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
