import React from "react";
import styled from "styled-components";

import { CardDetails } from "./components/Card/types";
import Card from "./components/Card/index";
import data from "./assets/data/data.json";

const Container = styled.div`
  display: flex;
  width: auto;
  height: 55em;
  justify-content: space-around;
  align-items: center;
  background-color: hsl(226, 43%, 10%);
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8em;
`;

const App = () => {
  return (
    <Container className="App">
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
