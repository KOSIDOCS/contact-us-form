import React from "react";
import styled from "styled-components";
import { saturate } from "polished";

const Head = () => <MainHead>Contact Information</MainHead>;

const MainHead = styled.h2`
  color: ${saturate(0.4, "#fff")};
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2.2em;
  letter-spacing: 0px;
`;

export default Head;
