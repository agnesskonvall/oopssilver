import styled from "styled-components";
import React, { useState } from "react";

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  font-family: "RedHatDisplayBold";
  text-decoration: underline;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    height: auto;
    padding: 2rem;
    font-size: 36px;
  }
`;

const FormWrapper = styled.div`
  align-items: center;
  margin-bottom: 1rem;

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  input[type="file"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  font-family: "RedHatDisplay";
  align-items: center;
`;

const HelpBlock = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
`;

const FieldSet = styled.fieldset`
  border: none;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
`;

export default function FormSection() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [setGift] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (adress.length <= 0) {
      tempErrors["adress"] = true;
      isValid = false;
    }
    if (model.length <= 0) {
      tempErrors["model"] = true;
      isValid = false;
    }
    if (color.length <= 0) {
      tempErrors["color"] = true;
      isValid = false;
    }
    if (size.length <= 0) {
      tempErrors["size"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          adress: adress,
          model: model,
          color: color,
          size: size,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      console.log(fullname, email, adress, model, color, size, message);

      setButtonText("Send");
    }
  };

  return (
    <FormWrapper>
      <a href="mailto:karin@oopssilver.se?subject=Best%C3%A4llning&body=Namn%3A%0A%0AMailadress%3A%0A%0APostadress%3A%0A%0ASmyckesmodell%3A%0A%0AF%C3%A4rgval%3A%20%0A%0AM%C3%A5tt%20och%20storlek%3A%0A%0APresentf%C3%B6rpackning%20(Ja%2FNej)%3A%20%0A%0AMeddelande%20(valfritt)%3A">
        <TitleText>BESTÄLL DITT SMYCKE HÄR</TitleText>
      </a>
    </FormWrapper>
  );
}
