import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cards from "./components/GameCards";
import cardData from "./cardData.json";
import "./App.css";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const correct = ["Nice!", "Way to go!", "You're awesome!"];
const incorrect = ["Nope", "Try again", "Sorry. Do it again!"];

class App extends Component {
  
  state = {
    brand: "Clickity Clack!",
    userSelect: '',
    userScore: 0,
    topScore: 0
  }
  
  
  render() {
    const shuffledCards = shuffleArray(cardData);
    const randCorrect = correct[Math.floor((Math.random() * (correct.length -1)) + 1)];
    const randIncorrect = incorrect[Math.floor((Math.random() * (incorrect.length -1)) + 1)];
    
    return (
      <div className="App">
        <Navbar userScore={this.state.userScore} topScore={this.state.topScore} brand={this.state.brand}/>
        <Header />
        <Body>
          {shuffledCards.map(card =>
            <Cards key={card.id}
              {...card}
              selectImage={(id) => {
                // Set state for selected image
                this.setState({userSelect: id})
                                                      
                // Game play + updating score
                this.setState((prevState) => {
                  if (this.state.userSelect === prevState.userSelect) {
                    return ({
                      userScore : 0,
                      brand: randIncorrect
                    })
                  } else {
                    if (this.state.topScore <= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                        topScore : this.state.topScore + 1,
                        brand: randCorrect
                      })
                    } else if (this.state.topScore >= this.state.userScore) {
                      return ({
                        userScore : this.state.userScore + 1,
                        brand: randCorrect
                      })
                    }
                  }
                })
              }}
            />
          )}
        </Body>
        <Footer />
      </div>
    );
  }
}

export default App;
