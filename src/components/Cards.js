import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/csmt-1617950384.jpg"
              text="Explore the Metro cities of India"
              label="Metro City"
              path="/dashboard"
            />
            <CardItem
              src="https://pbs.twimg.com/media/C4e0luSVcAEf2yC.jpg"
              text="Travel through the Forest of South in asthetic train"
              label="South"
              path="/dashboard"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              src="http://erail.in/blog/Images/Post/beautiful-railway-station-hi_1.jpg"
              text="Set Sail in the cloud visiting Hills of North"
              label="Mystery"
              path="/dashboard"
            />
            <CardItem
              src="https://i.pinimg.com/originals/f6/4a/5c/f64a5cc7b5ac5b3c0a974eac7ddb7939.jpg"
              text="Experience unexplored places of historic India"
              label="Kaula"
              path="/dashboard"
            />
            <CardItem
              src="https://static.toiimg.com/photo/61202140.cms"
              text="Ride through the Luxury of Culture"
              label="Luxury"
              path="/dashboard"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
