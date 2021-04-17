import React from "react";
import styled from "styled-components";
import { saturate } from "polished";
import { Instagram, Twitter, GitHub, Linkedin } from "react-feather";

const SocialIcon = () => {
  const handle = (e) => {
    const IdName = e.target.getAttribute("id");
    switch (IdName) {
      case "instagram":
        window.open("https://www.instagram.com/kosidocs/");
        break;
      case "github":
        window.open("https://github.com/KOSIDOCS");
        break;
      case "twitter":
        window.open("https://twitter.com/home");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/kosidocs-kelvin-b7883314a/");
        break;
      default:
        break;
    }
  };
  return (
    <Wrapper>
      <IconWrap>
        <Instagram size={20} color="#fff" onClick={handle} id="instagram" />
      </IconWrap>
      <IconWrap>
        <Twitter size={20} color="#fff" onClick={handle} id="twitter" />
      </IconWrap>
      <IconWrap>
        <GitHub size={20} color="#fff" onClick={handle} id="github" />
      </IconWrap>
      <IconWrap>
        <Linkedin size={20} color="#fff" onClick={handle} id="linkedin" />
      </IconWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 150px;
  left: 30px;
  height: 50px;
`;

const IconWrap = styled.div`
  padding: 0.4em;
  height: 1em;
  width: 1em;
  border-radius: 0.6em;
  transition: background 1s, transform 2s;
  margin-right: 1.9em;

  &:hover {
    background: ${saturate(0.2, "#F44C57")};
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

export default SocialIcon;
