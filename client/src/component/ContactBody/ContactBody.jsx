import React from "react";
import styled from "styled-components";
import { saturate } from "polished";
import LeftColumn from "./Left-column/LeftColumn";
import RightColumn from "./Right-column/RightColumn";

const ContactBody = () => {
  return (
    <Wrapper>
      <LeftColumn />
      <RightColumn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px auto;
  background: ${saturate(0.3, "#fff")};
  padding: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ContactBody;
