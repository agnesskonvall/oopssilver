import styled from "styled-components";
import React, { useState } from "react";

const TitleText = styled.h2`
  text-align: center;
  font-weight: bold;
  text-align: center;
  font-family: "RedHatDisplayBold";

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    width: 35rem;
    height: auto;
    padding: 2rem;
    font-size: 36px;
  }
`;
const BoldText = styled.p`
  font-family: "RedHatDisplayBold";
  font-size: 22px;
`;
const Text = styled.p`
  font-size: 16px;
  font-family: "RedHatDisplay";
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
  // const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [gift, setGift] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        adress: adress,
        model: model,
        // color: color,
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
      return;
    }
    console.log(fullname, email, adress, model, size, message);
  };

  return (
    <FormWrapper>
      <TitleText>BESTÄLL DITT SMYCKE HÄR</TitleText>
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
            <label htmlFor="Modell på smycket">Modell på smycket</label>
            <div>
              <input
                id="Modell på smycket"
                name="Modell på smycket"
                type="text"
                placeholder=""
                required=""
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
              <HelpBlock>
                Till exempel enfärgad Omega eller Saturnusring.
              </HelpBlock>
            </div>
          </div>

          {/* <div>
            <label htmlFor="Färgval">Färgval</label>
            <div>
              <input
                id="Färgval"
                name="Färgval"
                className="input-file"
                type="file"
                accept="image/*"
                value={color}
                onChange={(e) => {
                  setColor(e.target.files);
                }}
              />
              <HelpBlock>
                Ladda upp en bild på färgen du vill ha om du har en sådan. Du
                kan också skriva färgkoden eller beskriva färgen i
                meddelanderutan.
              </HelpBlock>
            </div>
          </div> */}

          <div>
            <label htmlFor="Mått och storlek">Mått och storlek</label>
            <div>
              <input
                id="Mått och storlek"
                name="Mått och storlek"
                type="text"
                placeholder=""
                required=""
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
              <HelpBlock>
                Till exempel innerdiametern på en ring du redan har eller din
                ringstorlek.
              </HelpBlock>
            </div>
          </div>

          <div>
            <label htmlFor="Önskar du presentförpackning?">
              Önskar du presentförpackning?
            </label>
            <div>
              <div className="radio">
                <label htmlFor="Önskar du presentförpackning?-0">
                  <input
                    type="radio"
                    name="Önskar du presentförpackning?"
                    id="Önskar du presentförpackning?-0"
                    value="Ja"
                    onChange={(e) => {
                      setGift(e.target.value);
                    }}
                  />
                  Ja
                </label>
              </div>
              <div className="radio">
                <label htmlFor="Önskar du presentförpackning?-1">
                  <input
                    type="radio"
                    name="Önskar du presentförpackning?"
                    id="Önskar du presentförpackning?-1"
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
            <label htmlFor="Beställ">Beställ</label>
            <div>
              <Button id="Beställ" name="Beställ" className="btn btn-primary">
                Beställ
              </Button>
            </div>
          </div>
        </FieldSet>
      </Form>
    </FormWrapper>
  );
}
