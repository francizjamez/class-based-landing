import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import Promo from "./Components/Promo";
import FormPage from "./Components/FormPage";

import "./Styles.css";

const bgImage =
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url("${(props) => props.background}");
  background-position: center;
`;

function App() {
  const [background, setBackground] = useState(bgImage);
  return (
    <Router>
      <Wrapper background={background}>
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route exact path="/promo">
            <Promo setBackground={setBackground} />
            {/* <PromoClass setBackground={setBackground} /> */}
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
