import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [person, setperson] = useState([
    {
      name: "Elon Musk",
      url: "https://images.wsj.net/im-301532?width=1280&size=1",
    },
    {
      name: "Lalisa",
      url: "https://p.favim.com/orig/2019/04/20/lalisa-lisa-lalisa-manoban-Favim.com-7073931.jpg",
    },
    {
      name: "Nancy Jewel",
      url: "https://www.pinkvilla.com/files/nancy_momoland_main_wm.png",
    },
    {
      name: "Jeff Bezos",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
    },
  ]);
  const onSwipe = (direction, character) => {
    console.log("You swiped: " + character + " in " + direction + " direction");
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tinder__card">
      <div className="tinder__container">
        {person.map((p) => (
          <TinderCard
            className="swipe"
            key={p.name}
            onSwipe={(direction) => onSwipe(direction, p.name)}
            onCardLeftScreen={() => onCardLeftScreen(p.name)}
            preventSwipe={["up", "down"]}
          >
            <div style={{ backgroundImage: `url(${p.url})` }} className="card">
              <h2>{p.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
