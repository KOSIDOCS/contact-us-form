import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { darken } from "polished";

const Button = (props) => {
  const { type, name, btnClick } = props;
  return (
    <FormButton type={type} onClick={btnClick}>
      {name}
    </FormButton>
  );
};

const FormButton = styled.button`
  appearance: none;
  outline: none;
  background: ${darken(0.1, "#472ECD")};
  color: #fff;
  font-weight: 700;
  font-size: 1em;
  padding: 1.3em 2.9em;
  border: 2px solid ${darken(0.1, "#472ECD")};
  border-radius: 5px;
  transition: border background 2s ease-in-out;

  &:hover {
    background: ${darken(0.2, "#472ECD")};
    border: 2px solid ${darken(0.2, "#472ECD")};
  }
`;

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  btnClick: PropTypes.func,
};

export default Button;
