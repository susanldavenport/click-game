import React from "react";

const styles = {
  body: {
    paddingTop: "25px",
    height: "100%",
    padding: "20px",
    alignContent: "flex-start",
    justifyContent: "space-around",
    overflow: "auto",
  }
}

const Body = props => <div className="body" style={styles.main}>{props.children}</div>;

export default Body;