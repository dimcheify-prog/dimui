import React from "react";

export interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button>{props.text}</button>
  )
}

export default Button;
