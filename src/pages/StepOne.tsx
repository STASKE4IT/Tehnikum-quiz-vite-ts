import { Heading } from "../components/Typography/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading
              headingText={"1. Где вы узнали про нашу школу?"}
              headingType={"h1"}
            />
            <AppInput
              inputLabel={""}
              id={"answer"}
              inputType={"text"}
              inputPlaceholder={"Ваш ответ"}
              errorMessage={"Введите ваш отве"} onChange={function (e: any): void {
                throw new Error("Function not implemented.");
              } } hasError={false}/>
            <AppButton isDisabled={false} ButtonText="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;