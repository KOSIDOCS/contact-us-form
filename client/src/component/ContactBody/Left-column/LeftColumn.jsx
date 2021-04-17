import React from "react";
import styled from "styled-components";
import { saturate, darken } from "polished";
import Head from "./Head";
import SubHeading from "./SubHeading";
import ContactMedium from "./ContactMedium";

const LeftColumn = () => {
  return (
    <Wrapper>
      <Header>
        <Head />
        <SubHeading />
      </Header>
      <ContactMedium />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 29%;
  /* background: ${saturate(0.8, "#0E054D")}; */
  background: ${darken(0.1, "#472ECD")};
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 80vh;
  }
`;

const Header = styled.div`
  padding: 20px 40px 10px 40px;
`;

export default LeftColumn;
