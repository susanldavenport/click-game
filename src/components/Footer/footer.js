import React from "react";

const styles = {
  img: {
    height: "20px", 
    width: "20px", 
    margin: "0 10px"
  },
  footer: {
    background: "#202020",
    color: "#ffffff", 
  }
}

const Footer = () => (
  <footer className="footer d-flex p-2" style={styles.footer}>
    <div className="bottom">
      Clickity Clack!
      <img src="../favicon.ico" alt="react" style={styles.img}/>
    </div>
  </footer>
); 

export default Footer;