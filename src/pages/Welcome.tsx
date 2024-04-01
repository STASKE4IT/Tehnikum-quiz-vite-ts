import { useEffect, useState } from "react";
import { Heading } from "../components/Typography/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";
import { Link } from "react-router-dom";

const Welcome = () => { 
  const [nameData, setNameData] = useState("")
  const [phoneData, setPhoneData] = useState("")

  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  useEffect(() => {
    if (!nameData) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  
    if (!phoneData) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }, [nameData, phoneData]);
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading headingType="h1" headingText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppInput
              inputLabel="Ваше имя"
              id="username"
              inputType="text"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите имя"
              hasError={nameError}
              onChange={(e) => (setNameData(e. target.value))}
            />
            <AppInput
              inputLabel="Ваш номер"
              id="phone"
              inputType="numeric"
              inputPlaceholder="+998 9- --- -- -- "
              errorMessage="Введите номер в правильном формате"
              hasError={phoneError}
              onChange={(e) => (setPhoneData(e.target.value))}
            />
            <Link to="/step-one">
            <AppButton isDisabled={false} ButtonText="Далее"/>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;