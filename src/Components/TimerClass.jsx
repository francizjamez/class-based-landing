import React from "react";
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

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const { expiry } = props;

    // const [timeRemaining, setTimeRemaining] = useState(expiry - Date.now());
    this.state = {
      timeRemaining: expiry - Date.now(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.expiry - Date.now() < 1000) {
        clearInterval(this.timer);
        this.props.setEnd(true);
      }
      // setTimeRemaining(() => this.state.expiry - Date.now());

      this.setState({
        timeRemaining: this.props.expiry - Date.now(),
      });
    }, 1000);
    // eslint-disable-next-line
  }

  componentWillUnmount() {}

  render() {
    let timeRemainingCpy = this.state.timeRemaining;
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
  }
}

export default Timer;
