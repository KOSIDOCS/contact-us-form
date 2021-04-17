import React, { Fragment } from "react";
import styled from "styled-components";
import { saturate, rgba } from "polished";
import PhoneContact from "./Phone";
import Email from "./Email";
import Address from "./Address";
import SocialIcon from "./SocaiIcon";

const ContactMedium = () => {
  return (
    <Fragment>
      <PhoneContact />
      <Email />
      <Address />
      <Container>
        <SocialIcon />
        <BigCircle></BigCircle>
      </Container>
    </Fragment>
  );
};

// const Wrapper = styled.div`
//   /* margin: 10px 0px 10px 0px; */
//   /* margin: 0 auto; */
//   /* padding: 20px 40px 10px 40px; */
//   /* overflow: hidden; */
// `;

const Container = styled.div`
  width: 100%;
  /* width: 30vw; */
  /* padding: 8px; */
  display: flex;
  flex-direction: row;
  /* margin-left: calc(-10vw + 10%); */
  position: relative;

  &::before {
    content: "";
    height: 200px;
    width: 200px;
    shape-outside: circle();
    clip-path: circle(30% at 50%);
    background: ${rgba(146, 117, 215, 0.9)};
    position: absolute;
    top: -25px;
    left: 170px;
    z-index: 5;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BigCircle = styled.div`
  float: right;
  height: 300px;
  width: 300px;
  shape-outside: circle();
  clip-path: circle(40% at 45%);
  background: ${saturate(0.2, "#F44C57")};
  position: absolute;
  top: 40px;
  /* left: 210px; */
  left: calc(180px + (210 - 180) * ((100vw - 400px) / (1600 - 400)));
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ContactMedium;
