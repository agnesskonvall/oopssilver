import styled from "styled-components";
import React, { useState } from "react";

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  font-family: "RedHatDisplayBold";

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
      <TitleText>BEST??LL DITT SMYCKE H??R</TitleText>
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <div>
            <label htmlFor="Namn">Namn</label>
            <div>
              <input
                id="Namn"
                name="Namn"
                type="text"
                placeholder=""
                required=""
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="Mailadress">Mailadress</label>
            <div>
              <input
                id="Mailadress"
                name="Mailadress"
                type="text"
                placeholder=""
                required=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="Adress">Adress</label>
            <div>
              <input
                id="Adress"
                name="Adress"
                type="text"
                placeholder=""
                required=""
                value={adress}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
              <HelpBlock>Skriv hela adressen med postnummer och ort.</HelpBlock>
            </div>
          </div>

          <div>
            <label htmlFor="Modell p?? smycket">Modell p?? smycket</label>
            <div>
              <input
                id="Modell p?? smycket"
                name="Modell p?? smycket"
                type="text"
                placeholder=""
                required=""
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
              <HelpBlock>
                Till exempel enf??rgad Omega eller Saturnusring.
              </HelpBlock>
            </div>
          </div>

          <div>
            <label htmlFor="F??rgval">F??rgval</label>
            <div>
              <input
                id="F??rgval"
                name="F??rgval"
                type="text"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
              <HelpBlock>
                Skriv f??rgkoden eller beskriv din ??nskade f??rg.
              </HelpBlock>
            </div>
          </div>

          <div>
            <label htmlFor="M??tt och storlek">M??tt och storlek</label>
            <div>
              <input
                id="M??tt och storlek"
                name="M??tt och storlek"
                type="text"
                placeholder=""
                required=""
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
              <HelpBlock>
                Till exempel innerdiametern p?? en ring du redan har eller din
                ringstorlek.
              </HelpBlock>
            </div>
          </div>

          <div>
            <label htmlFor="??nskar du presentf??rpackning?">
              ??nskar du presentf??rpackning?
            </label>
            <div>
              <div className="radio">
                <label htmlFor="??nskar du presentf??rpackning?-0">
                  <input
                    type="radio"
                    name="??nskar du presentf??rpackning?"
                    id="??nskar du presentf??rpackning?-0"
                    value="Ja"
                    onChange={(e) => {
                      setGift(e.target.value);
                    }}
                  />
                  Ja
                </label>
              </div>
              <div className="radio">
                <label htmlFor="??nskar du presentf??rpackning?-1">
                  <input
                    type="radio"
                    name="??nskar du presentf??rpackning?"
                    id="??nskar du presentf??rpackning?-1"
                    value="Nej"
                    onChange={(e) => {
                      setGift(e.target.value);
                    }}
                  />
                  Nej
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="Meddelande">Meddelande</label>
            <div>
              <TextArea
                id="Meddelande"
                name="Meddelande"
                type="textarea"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></TextArea>
            </div>
          </div>

          <div>
            <label htmlFor="Best??ll">Best??ll</label>
            <div>
              <Button
                id="Best??ll"
                name="Best??ll"
                className="btn btn-primary"
                type="submit"
              >
                Best??ll
              </Button>
            </div>
          </div>
        </FieldSet>
      </Form>
    </FormWrapper>
  );
}
