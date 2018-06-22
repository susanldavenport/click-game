import React from "react";
import Radium from 'radium';

const styles = {
  img: {
    height: "250px",
    width: "250px",
    border: "3px solid #202020",
    padding: "15px",
    margin: "15px",
    background: "#ECEFF1",
    borderRadius: "15px",
    ':hover': {
      boxShadow: "8px 8px 2px #202020"
    },
  }
}

let GameCard = props => (
  <img 
    className="clickImg img-fluid" 
    id={props.id}
    alt={props.alt} 
    src={props.image} 
    style={styles.img}
    onClick={() => {
      props.selectImage(props.id);
    }}
  />
);

GameCard = Radium(GameCard);

export default GameCard; 