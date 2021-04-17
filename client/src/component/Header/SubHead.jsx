import React from "react";
import styled from "styled-components";
import { saturate } from "polished";

const SubHead = () => (
  <SubHeading>Any question or remarks? Just write us a message!</SubHeading>
);

const SubHeading = styled.h4`
  font-weight: 400;
  color: ${saturate(0.1, "#A4A2BC")};
  /* font-size: 1.3em; */
  font-size: calc(15px + (16 - 15) * ((100vw - 400px) / (1600 - 400)));
  line-height: 1em;
`;

export default SubHead;
