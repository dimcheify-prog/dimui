import React, { MouseEvent, SyntheticEvent, useEffect } from "react";
import styles from "./Button.module.css";

type variantType = 'contained' | 'outlined';
type colorType = 'primary' | 'secondary';

export interface IButtonProps {
  label: string;
  variant?: variantType;
  color?: colorType
}

const Button = ({label, variant='contained', color='primary'}: IButtonProps) => {

  return (
    <button>
      <span></span>
      <span>{label}</span>
    </button>
  )
}

export default Button;
