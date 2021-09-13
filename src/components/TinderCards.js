import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../axios"

const TinderCards = () => {
  const [person, setperson] = useState([]);

  useEffect(() => {
   
    async function fetchData(){
      const req = await axios.get("/tinder/cards");
      setperson(req.data)
    }
    fetchData();
  },[])

  const onSwipe = (direction, character) => {
    console.log("You swiped: " + character + " in " + direction + " direction");
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tinder__card">
      <div className="tinder__container">
        {person.map((people) => (
          <TinderCard
            className="swipe"
            key={people.name}
            onSwipe={(direction) => onSwipe(direction, people.name)}
            onCardLeftScreen={() => onCardLeftScreen(people.name)}
            preventSwipe={["up", "down"]}
          >
            <div style={{ backgroundImage: `url(${people.url})` }} className="card">
              <h2>{people.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
