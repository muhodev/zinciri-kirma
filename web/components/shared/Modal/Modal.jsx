import { Overlay, Portal } from "components";
import { Close } from "components/icons";
import style from "./style.module.css";

export function Modal(props) {
  return (
    <Portal>
      <Overlay close={props.close}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <header className="flex items-center justify-between px-5 py-4">
            <div className="flex-1 text-lg">{props.title}</div>
            <div className="cursor-pointer" onClick={props.close}>
              <span className="text-2xl">
                <Close />
              </span>
            </div>
          </header>
          <div className="px-5 py-4">{props.children}</div>
        </div>
      </Overlay>
    </Portal>
  );
}
