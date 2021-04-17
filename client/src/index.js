import React from "react";
import ReactDOM from "react-dom";
// import Header from './component/Header';
import HeaderComponent from "./component/Header/HeaderComponent";
import ContactBody from "./component/ContactBody/ContactBody";
// import ContactForm from "./component/ContactForm";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import styled from "styled-components";
//import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <Container>
      {/* <Header /> */}
      <HeaderComponent />
      <ContactBody />
      {/* <ContactForm /> */}
    </Container>
  );
}

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
