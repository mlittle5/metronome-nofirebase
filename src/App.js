import React, { useState, Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Jumbotron, Media } from "react-bootstrap";
import pizzas from "./data.json";
import { PizzaCard } from "./components/PizzaCard";
import { Confirmation } from "./components/Comfirmation";
import Tree from "./components/christmas_penis.png";
import RainbowText from "react-rainbow-text";

function App() {
  return (
    <Jumbotron>
      <Media>
        <Media.Body>
          <h1 className="display-2">Hello world!</h1>
          <p className="lead">This is a simple jumbotron</p>
          <hr className="my-4" />
          <p>
            this is a sweet pic of a guy with a christmas tree as his penis.
          </p>
          <hr className="my-2" />
          <br />
          <br />
          <h4 className="display-4">
            <RainbowText lightness={0.5} saturation={1}>
              Happy Holidays!
            </RainbowText>
          </h4>
        </Media.Body>
        <img src={Tree} className="ml-3" alt="headshot" />
      </Media>
    </Jumbotron>
  );
}

export default App;
