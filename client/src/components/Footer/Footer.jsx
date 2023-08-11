import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo
            amet laborum repellat eum minus? Atque officiis nisi, ipsum,
            accusantium recusandae.
          </div>
        </div>
        <div className="col">
          <div className="title">Contect</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              No. 3, RMZ Infinity – Tower E Old Madras Road 3rd, 4th, and 5th
              Floors Bangalore, 560 016 India
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">047 272 0261</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@ElectraCart.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Return</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">ElectraCart 2023 Created by OM SUTHAR</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
