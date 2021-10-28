import React, { useState } from "react";
import styled from "styled-components";

import { CardDetails, UserCardDetails } from "./components/Card/types";
import Card from "./components/Card/Card";
import data from "./assets/data/data.json";
import UserCard from "./components/Card/UserCard";

const Container = styled.div`
  display: flex;
  font-family: "Rubik";
  width: auto;
  height: 55.6em;
  justify-content: center;
  align-items: center;
  background-color: hsl(226, 43%, 10%);
  gap: 1.5em;
  @media (max-width: 769px) {
    height: auto;
    flex-direction: column;
    padding-top: 4em;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8em;
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

const App = () => {
  const [timeFrame, setTimeFrame] = useState<UserCardDetails["timeFrame"]>("daily");
  const user: UserCardDetails["user"] = {
    firstName: "Jeremy",
    lastName: "Robson",
  };

  const cardText = (t: UserCardDetails["timeFrame"]) => {
    switch (t) {
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      default:
        return "Yesterday";
    }
  };

  return (
    <Container className="App">
      <UserCard setTimeFrame={setTimeFrame} timeFrame={timeFrame} user={user} />
      <Cards>
        {data.map((category, i) => (
          <Card
            key={i}
            current={category.timeframes[timeFrame].current}
            previous={category.timeframes[timeFrame].previous}
            text={cardText(timeFrame)}
            title={category.title as CardDetails["title"]}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default App;
