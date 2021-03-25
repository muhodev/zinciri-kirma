import style from "./style.module.css";
import { ButtonBase } from "./ButtonBase";

export function ButtonPrimary({ children, onClick, ...rest }) {
  return (
    <ButtonBase className={style.primary} onClick={onClick} {...rest}>
      {children}
    </ButtonBase>
  );
}
