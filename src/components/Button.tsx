import { Fragment } from "react";

interface ButtonProps {
  buttonText: string;
  buttonType: string;
}

function Button({ buttonText, buttonType }: ButtonProps) {
  return (
    <Fragment>
      <button type="button" className={`btn btn-${buttonType}`}>
        {buttonText}
      </button>
    </Fragment>
  );
}

export default Button;
