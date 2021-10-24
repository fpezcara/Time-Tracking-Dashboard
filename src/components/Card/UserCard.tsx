import React, { useState } from "react";
import styled from "styled-components";

interface User {
  firstName: string;
  lastName: string;
  timeframe: "daily" | "weekly" | "monthly";
}

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(246, 80%, 60%);
  min-width: 13em;
  min-height: 17em;
  border-radius: 0.8em;
  z-index: 2;
  padding: 0.9em 1.3em 2.9em;

  img {
    width: 5em;
    height: auto;
    border: 2px solid white;
    border-radius: 3em;
    margin-bottom: 3em;
    margin-left: 0.2em;
  }
  span {
    font-size: 12px;
    color: hsl(236, 100%, 87%);
  }
  p {
    font-size: 30px;
    margin: 0.1em;
    font-weight: 300;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  overflow: hidden;
  border-radius: 0.8em;
  margin-top: -1em;
  padding: 1.5em 1.4em;
  color: hsl(236, 100%, 87%);
  font-size: 14px;
  p {
    padding: 0;
    margin: 0.6em 0;
  }
`;

const UserCard = () => {
  const user = {
    firstName: "Jeremy",
    lastName: "Robson",
  };

  // no se como asignar el tipo aca

  const [timeFrame, setTimeFrame] = useState<User["timeframe"]>("daily");

  return (
    <Container>
      <Header>
        <img src="/src/assets/images/image-jeremy.png" />
        <span>Report for</span>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </Header>
      <Body>
        <a>
          <p>Daily</p>
        </a>
        <a>
          <p>Weekly</p>
        </a>
        <a>
          <p>Monthly</p>
        </a>
      </Body>
    </Container>
  );
};

export default UserCard;
