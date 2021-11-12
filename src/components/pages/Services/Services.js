import React from "react";
import CardItem from "../../CardItems";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="services__heading f-head">
        Our Services to ensure your welfare
      </div>
      <div className="services__container">
        <div className="services__wrapper">
          <ul className="services__items">
            <CardItem
              src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Luxury-trains-in-India..jpg"
              text="Explore some of the Luxury options to Travel"
              label="Maharaja Express"
              path="/dashboard"
            />
            <CardItem
              src="images/train.jpg"
              text="Experience the area with a tour in train"
              label="Trains"
              path="/dashboard"
            />
            
          </ul>
          <ul className="services__items">
            <CardItem
              src="https://img.dtnext.in/Articles/2021/May/202105081922265728_Rail-union-demands-parity-in-compensation-with-frontline_SECVPF.gif"
              text="Sanitization is our priority"
              label="Sanitization"
              path="/dashboard"
            />
            <CardItem
              src="https://thumbs.dreamstime.com/z/hauptbahnhof-berlin-central-train-station-food-court-germany-people-visit-158502947.jpg"
              text="24*7 Food that is die for"
              label="Meals"
              path="/dashboard"
            />
            
            <CardItem
              src="https://www.pnrstatus.io/wp-content/uploads/2020/08/compressed-q1t3.jpg"
              text="Wait in Peace"
              label="Waiting Area"
              path="/dashboard"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
