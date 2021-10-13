import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            Cats are terrible animals. I do not like cats at all. Contrary to
            popular beliefs regarding their cuteness i believe they are really
            scary and horrible animals. Sorry just my opinion.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">
            Dogs are really cute. I will never own one as a pet though or let
            anyone in my household own one, they still cute though. Dogs have
            many benefits, they don't just bark and eat they help the blind, the
            mentally ill and so much more. I love dogs.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">
            Cats and dogs don't really get along. I don't know why they just
            don't. But Furbook is going to fix this dilemma. Bring your cats and
            dogs to us and we would make them the best of friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
