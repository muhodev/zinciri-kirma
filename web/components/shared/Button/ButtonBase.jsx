import style from "./style.module.css";
import cn from "classnames";

export function ButtonBase({ onClick, children, className, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(style.button, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
