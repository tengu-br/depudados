import React from "react";
import footerBg from "../assets/img/footer-bg.png";
import footerLogo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-text text-center">
          feito por <a style={{ marginLeft: '1ch', marginRight: '1ch' }} href="https://www.linkedin.com/in/vrezendecosta/">mim</a> com carinho
        </div>
      </div>
    </footer>
  );
};

export default Footer;
