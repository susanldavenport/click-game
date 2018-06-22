import React from "react";

const styles = {
  logo: {
    fontSize: "30px"
  },
  guide: {
    fontSize: "20px"
  },
  navbar: {
    background: "#df661c",
    color: "#202020", 
  },
  scoreBoard: {
    fontSize: "30px"
  }
}

const Navbar = props => (
  <nav className="navbar navbar-expand-lg sticky-top" style={styles.navbar}>
    <h1 className="navbar-brand" style={styles.logo} href="#"><span>{props.brand}</span></h1>
    
    <div className="scoreboard ml-auto d-flex">
      <h4>User Score: <span className="p-2" id="userScore" style={styles.scoreBoard}>{props.userScore}</span></h4>
      <h4>Top Score: <span className="p-2" id="topScore" style={styles.scoreBoard}>{props.topScore}</span></h4>
    </div>
  </nav>
); 

export default Navbar;