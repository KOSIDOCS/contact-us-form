import React from "react";
import styled from "styled-components";
import { saturate } from "polished";

const SubHeading = () => (
  <SubHead>
    Fill up the form and our Team will get back to you within 24 hours.
  </SubHead>
);

const SubHead = styled.h5`
  font-weight: 300;
  color: ${saturate(0.1, "#A4A2BC")};
  font-size: 0.8em;
  line-height: 1em;
`;

export default SubHeading;
