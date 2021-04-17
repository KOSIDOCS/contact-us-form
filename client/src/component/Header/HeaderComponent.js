import React from "react";
import styled from "styled-components";
import Head from "./Head";
import SubHead from "./SubHead";

const HeaderComponent = () => {
  return (
    <Header>
      <Head />
      <SubHead />
    </Header>
  );
};

const Header = styled.header`
  margin: 20px auto;
  text-align: center;
`;
export default HeaderComponent;
