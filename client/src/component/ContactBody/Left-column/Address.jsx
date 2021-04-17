import React from "react";
import styled from "styled-components";
import { saturate } from "polished";
import { MapPin } from "react-feather";

const Address = () => {
  return (
    <Wrapper>
      <MapPin size={24} color="#F44C57" />
      <Link
        itemProp="address"
        href="https://www.google.com/maps/place/Dubai,+United Arab Emirates/"
        target="_blank"
      >
        D Block JLT, Dubai, UAE
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  margin: 40px 40px 10px 40px;
  /* margin-bottom: 2em; */
`;

const Link = styled.a`
  appearance: none;
  margin: 0px 0px 0px 18px;
  color: ${saturate(0.2, "#A4A2BC")};
  font-size: 0.9em;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  bottom: 6px;
`;

export default Address;
