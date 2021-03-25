import { createPortal } from "react-dom";

export default function DynamicPortal(props) {
  return createPortal(props.children, document.body);
}
