import React from "react";
import styled from "styled-components";

import { CardDetails } from "./components/Card/types";
import Card from "./components/Card/Card";
import data from "./assets/data/data.json";
import UserCard from "./components/Card/UserCard";

const Container = styled.div`
  display: flex;
  font-family: "Rubik";
  width: auto;
  height: 55em;
  justify-content: center;
  align-items: center;
  background-color: hsl(226, 43%, 10%);
  gap: 1.5em;
  /* padding: 1em; */
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8em;
`;

const App = () => {
  return (
    <Container className="App">
      <UserCard />
      <Cards>
        {data.map((category, i) => (
          <Card
            key={i}
            current={category.timeframes.daily.current}
            previous={category.timeframes.daily.previous}
            title={category.title as CardDetails["title"]}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default App;
