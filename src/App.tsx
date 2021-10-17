import React, { useState } from "react";
import styled from "styled-components";

import { CardDetails } from "./components/Card/types";
import Card from "./components/Card/index";
import data from "./assets/data/data.json";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50em;
  justify-content: space-around;
  align-items: center;
  background-color: hsl(226, 43%, 10%);

  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-areas:
    repeat(3, "card")
    repeat(3, "card"); */
  /* grid-template-rows: 1fr 1fr; */

  /* align-items: center; */
  /* flex-direction: column; */
  /* min-width: 400px; */
  /* column-gap: 2px; */
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
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
