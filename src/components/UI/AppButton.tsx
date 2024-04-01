type AppButtonProps = {
  ButtonText: string
  isDisabled: boolean;
}



export const AppButton = ({ButtonText, isDisabled}: AppButtonProps) => {

    return (
        <button disabled={isDisabled} type="button" id="next-btn">
        {ButtonText}
      </button>
    )
}
