import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";
// import Promo from "./Components/Promo";
import FormPage from "./Components/FormPage";

import "./Styles.css";
import PromoClass from "./Components/PromoClass";

const bgImage =
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url("${(props) => props.background}");
  background-position: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: bgImage,
    };
  }

  setBackground = (background) => {
    this.setState({ background: background });
  };

  render() {
    return (
      <Router>
        <Wrapper background={this.state.background}>
          <Switch>
            <Route exact path="/">
              <FormPage />
            </Route>

            <Route
              exact
              path="/promo"
              render={(props) => (
                <PromoClass {...props} setBackground={this.setBackground} />
              )}
            />
            {/* <Promo setBackground={this.setBackground} /> */}
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}
