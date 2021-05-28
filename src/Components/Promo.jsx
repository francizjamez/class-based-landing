import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import Timer from "./Timer";

const Promo = ({ setBackground }) => {
  const [end, setEnd] = useState(false);

  const history = useHistory();

  let {
    main: heading,
    secondary: subtitle,
    subtext,
    buttonText,
    date,
    time,
    background,
  } = history.location.state;

  let expiry = Date.parse(`${date}T${time}:00`);

  useEffect(() => {
    setBackground(background);
  });

  return (
    <Wrapper>
      {end && <h1>SALE HAS ENDED</h1>}

      {!end && (
        <>
          <h2>{heading}</h2>
          <h1>{subtitle}</h1>
          <h2>{subtext}</h2>
          <Timer expiry={expiry} setEnd={setEnd} />
          <Button>{buttonText}</Button>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(183, 172, 68, 0.9);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30rem;

  h2 {
    color: white;
  }
  h1 {
    color: #ff4500;
  }
`;

const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: #ff4500;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

export default Promo;
