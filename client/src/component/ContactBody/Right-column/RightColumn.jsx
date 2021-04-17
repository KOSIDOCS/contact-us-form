import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { saturate } from "polished";

import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import RadioBtn from "./RadioBtn";
import MessageInput from "./MessageInput";
import Button from "./Button";

const RightColumn = () => {
  // initialize state to hold validity of form fields
  const [fieldState, setFieldState] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false,
  });

  const [fieldValue, setFieldValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // result of our form submit
  const [result, setResult] = useState(null);

  // keep our selected option
  const [radioState, setRadioState] = useState({});

  // update our selected option with the change
  const onValueChange = (event) =>
    setRadioState({ selectedOption: event.target.value });

  // handle our form submit
  const formSubmit = (event) => {
    event.preventDefault();
    const details = {
      ...fieldValue,
      ...radioState,
    };
    axios
      .post("/send", { ...details })
      .then((response) => {
        setResult(response.data);
        setFieldValue({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
        setFieldState({
          firstname: false,
          lastname: false,
          email: false,
          phone: false,
          message: false,
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  const fieldStateChanged = (field) => (state) => {
    setFieldValue((prevValue) => {
      if (field === "firstname") {
        return {
          firstname: state.value,
          lastname: prevValue.lastname,
          email: prevValue.email,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      } else if (field === "lastname") {
        return {
          firstname: prevValue.firstname,
          lastname: state.value,
          email: prevValue.email,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      } else if (field === "email") {
        return {
          firstname: prevValue.firstname,
          lastname: prevValue.lastname,
          email: state.value,
          phone: prevValue.phone,
          message: prevValue.message,
        };
      } else if (field === "phone") {
        return {
          firstname: prevValue.firstname,
          lastname: prevValue.lastname,
          email: prevValue.email,
          phone: state.value,
          message: prevValue.message,
        };
      } else if (field === "message") {
        return {
          firstname: prevValue.firstname,
          lastname: prevValue.lastname,
          email: prevValue.email,
          phone: prevValue.phone,
          message: state.value,
        };
      }
    });
    setFieldState({ [field]: state.errors.length === 0 });
  };

  const firstNameChanged = fieldStateChanged("firstname");
  const lastNameChanged = fieldStateChanged("lastname");
  const emailChanged = fieldStateChanged("email");
  const phoneChanged = fieldStateChanged("phone");
  const messageChanged = fieldStateChanged("message");

  const validateName = (value, label) => {
    const regex = /^[a-z]{2,}$/i;
    if (!regex.test(value)) throw new Error(`${label} is invalid`);
  };

  return (
    <Wrapper>
      {result ? (
        <ResultWrapper success={`${result.success ? "success" : "error"}`}>
          {result.message}
          <Button
            name="Go back"
            btnClick={() => window.location.reload(true)}
          />
        </ResultWrapper>
      ) : (
        <form onSubmit={formSubmit}>
          <FirstRow>
            <TextInput
              labelId="firstname"
              label="firstname"
              placeholder="John Doe"
              type="text"
              validator={validateName}
              onStateChanged={firstNameChanged}
              required
            />
            <TextInput
              labelId="lastname"
              label="Last Name"
              placeholder="John Doe"
              type="text"
              validator={validateName}
              onStateChanged={lastNameChanged}
              required
            />
          </FirstRow>
          <SecondRow>
            <EmailInput
              labelId="email"
              label="email"
              placeholder="mymail@gmail.com"
              onStateChanged={emailChanged}
              required
            />
            <PhoneInput
              labelId="phone"
              label="phone"
              placeholder="+971 50 267 5078"
              onStateChanged={phoneChanged}
              required
            />
          </SecondRow>
          <Description>
            What type of website do you need? {radioState.selectedOption}
          </Description>
          <ThirdRow>
            <RadioBtn
              id="choice1"
              value="Web Design"
              label="Web Design"
              radioChecked={radioState.selectedOption === "Web Design"}
              radioChanged={onValueChange}
            />
            <RadioBtn
              id="choice2"
              value="Web Development"
              label="Web Development"
              radioChecked={radioState.selectedOption === "Web Development"}
              radioChanged={onValueChange}
            />
            <RadioBtn
              id="choice3"
              value="Logo Design"
              label="Logo Design"
              radioChecked={radioState.selectedOption === "Logo Design"}
              radioChanged={onValueChange}
            />
            <RadioBtn
              id="choice4"
              value="Other"
              label="Other"
              radioChecked={radioState.selectedOption === "Other"}
              radioChanged={onValueChange}
            />
          </ThirdRow>
          <FourthRow>
            <MessageInput
              label="message"
              labelId="message"
              placeholder="Write your message"
              onStateChanged={messageChanged}
              required
            />
          </FourthRow>
          <LastRow>
            <Button type="submit" name="Send Message" />
          </LastRow>
        </form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 71%;
  padding: 30px 60px 30px 60px;

  @media (max-width: 768px) {
    padding: 30px 3px 30px 3px;
    width: 100%;
  }
`;

const ResultWrapper = styled.div`
  color: ${(props) =>
    props.success ? saturate(0.2, "#472ECD") : saturate(0.2, "#F44C57")};
  height: 460px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
`;
const FirstRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
  }
`;

const SecondRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
  }
`;

const ThirdRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
  }
`;

const Description = styled.div`
  color: #0e054d;
  font-weight: 700;
  margin-top: 30px;
`;

const FourthRow = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const LastRow = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export default RightColumn;
