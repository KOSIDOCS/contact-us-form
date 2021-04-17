import React from "react";
import styled from "styled-components";
import { saturate } from "polished";

const Head = () => <MainHead> Contact Us</MainHead>;

const MainHead = styled.h1`
  color: ${saturate(0.1, "#0E054D")};
  font-weight: 900;
  /* font-size: 3em; */
  font-size: calc(20px + (48 - 20) * ((100vw - 400px) / (1600 - 400)));
  line-height: 2em;
`;

export default Head;
