import React from "react";

const styles = {
  header: {
    background: "linear-gradient(135deg, #38a8ca, #a6c0c9)",
  },
  h1: {
    fontSize: "56px",
    fontFamily: 'sans-serif',
  }, 
  p: {
    fontSize: "28px",
    fontFamily: 'sans-serif',
  }
}

const Header = () => (
  <div className="jumbotron" style={styles.header}>
    <h1 className="display-4" style={styles.h1}>Clickity Clack!</h1>
    <p className="lead" style={styles.p}>Click on an image to earn points,<br/> but don't click the same image twice!</p>
  </div>
); 

export default Header; 
