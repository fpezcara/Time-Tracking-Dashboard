import React from "react";
import styled from "styled-components";

import userPic from "../../assets/images/image-jeremy.png";

import { UserCardDetails } from "./types";

type Props = UserCardDetails;

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
  min-height: 18em;
  border-radius: 0.8em;
  z-index: 2;
  padding: 1.6em 1.3em 2.9em 1.6em;
  @media (max-width: 769px) {
    width: 20.5em;
    min-height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.8em;
    div {
      div {
        display: flex;
      }
    }
  }
  img {
    width: 5em;
    height: auto;
    border: 3px solid white;
    border-radius: 3em;
    margin-bottom: 3em;
    @media (max-width: 769px) {
      width: 5em;
      height: 5em;
      margin: 0;
    }
  }
  span {
    font-size: 12px;
    color: hsl(236, 100%, 87%);
  }
  p {
    font-size: 33px;
    margin: 0.1em;
    font-weight: 300;
    margin: 0 0.2em 0 0;
    @media (max-width: 769px) {
      font-size: 25px;
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  overflow: hidden;
  border-radius: 0.8em;
  margin-top: -1em;
  padding: 1.6em;
  font-size: 14px;
  font-weight: 400;
  min-height: 1em;
  @media (max-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.4em 1.8em 0.8em;
    font-size: 16px;
    border-radius: 0.9em;
  }
  ul {
    cursor: pointer;
    list-style-type: none;
    padding: 0 0.1em;
    margin: 0.6em 0;
    @media (max-width: 769px) {
      padding: 0;
      margin: 0 0 0 0.4em;
    }
  }
`;

const Li = styled.li`
  padding: 0;
  margin: 0.2em 0;
  color: ${({ color }) => color};
  text-transform: capitalize;
  @media (max-width: 769px) {
    padding: 0.8em 0;
    margin: 0;
  }
`;

const UserCard = ({ setTimeFrame, timeFrame, user }: UserCardDetails) => {
  const timeframes = ["daily", "weekly", "monthly"];

  const handleClick = (t: Props["timeFrame"]) => {
    setTimeFrame(t);
  };

  return (
    <Container>
      <Header>
        <img alt="user" src={userPic} />
        <div>
          <span>Report for</span>
          <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
        </div>
      </Header>
      <Body>
        {timeframes.map((t, i) => (
          <ul key={i}>
            <Li
              color={t === timeFrame ? "white" : "hsl(236, 100%, 87%)"}
              value={timeFrame}
              onClick={() => handleClick(t as UserCardDetails["timeFrame"])}
            >
              {t}
            </Li>
          </ul>
        ))}
      </Body>
    </Container>
  );
};

export default UserCard;
