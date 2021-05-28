import React from "react";
import styled from "styled-components";

// import Timer from "./Timer";

import TimerClass from "./TimerClass";

class PromoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      end: false,
    };
  }

  componentDidMount() {
    const { background } = this.props.location.state;
    this.props.setBackground(background);
  }

  setEnd = (arg) => {
    this.setState({ end: arg });
  };

  render() {
    let {
      main: heading,
      secondary: subtitle,
      subtext,
      buttonText,
      date,
      time,
    } = this.props.location.state;

    const expiry = Date.parse(`${date}T${time}:00`);

    return (
      <Wrapper>
        {this.state.end && <h1>SALE HAS ENDED</h1>}

        {!this.state.end && (
          <>
            <h2>{heading}</h2>
            <h1>{subtitle}</h1>
            <h2>{subtext}</h2>
            <TimerClass expiry={expiry} setEnd={this.setEnd} />
            <Button>{buttonText}</Button>
          </>
        )}
      </Wrapper>
    );
  }
}

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

export default PromoClass;
