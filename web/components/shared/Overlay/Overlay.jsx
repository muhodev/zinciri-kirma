export function Overlay(props) {
  return (
    <div
      onClick={props.close}
      className="flex justify-center items-start w-screen h-screen fixed bg-gray-200 top-0 left-0 bg-opacity-30"
    >
      {props.children}
    </div>
  );
}
