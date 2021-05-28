import { useState, useEffect } from "react";

import styled from "styled-components";

const Square = styled.div`
  border: 3px solid #df362d;
  padding: 0.5rem;
  width: 5rem;
  border-radius: 5px;
  font-size: 2.5rem;
  color: #df362d;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Timer = ({ expiry, setEnd }) => {
  const [timeRemaining, setTimeRemaining] = useState(expiry - Date.now());

  useEffect(() => {
    let timer = setInterval(() => {
      if (expiry - Date.now() < 1000) {
        clearInterval(timer);
        setEnd(true);
      }
      setTimeRemaining(() => expiry - Date.now());
    }, 1000);
    // eslint-disable-next-line
  }, [expiry]);

  let timeRemainingCpy = timeRemaining;

  const days = Math.floor(timeRemainingCpy / (24 * 60 * 60 * 1000));
  timeRemainingCpy -= days * (24 * 60 * 60 * 1000);
  const hours = Math.floor(timeRemainingCpy / (60 * 60 * 1000));
  timeRemainingCpy -= hours * (60 * 60 * 1000);
  const minutes = Math.floor(timeRemainingCpy / 60000);
  timeRemainingCpy -= minutes * 60000;

  const seconds = Math.floor(timeRemainingCpy / 1000);

  return (
    <Wrapper>
      <Square>{days < 10 ? "0" + days : days}</Square>
      <Square>{hours < 10 ? "0" + hours : hours}</Square>
      <Square>{minutes < 10 ? "0" + minutes : minutes}</Square>
      <Square>{seconds < 10 ? "0" + seconds : seconds}</Square>
    </Wrapper>
  );
};

export default Timer;
